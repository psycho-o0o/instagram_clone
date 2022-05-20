import express, { Express, Request, Response } from 'express';
import { connectToMongo } from './api/db/connect';
import userRouter from './api/routes/users.routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const mongodbConnectArgs = {
	uri: process.env.DB_ADDR as string,
	connectOptions: { dbName: 'instagram' }
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);

connectToMongo(mongodbConnectArgs)
	.then(() => {
		app.listen(port, () => {
			console.log(
				`[server] : Server is running at https://localhost:${port}`
			);
		});
	})
	.catch((e) => {
		console.log(e);
	});

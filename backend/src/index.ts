import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import userRouter from './api/routes/users.routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRouter);

mongoose
	.set('strictQuery', false)
	.connect(process.env.DB_ADDR as string, { dbName: 'instagram' })
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

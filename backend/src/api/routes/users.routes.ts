import express, { NextFunction, Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import UserSchema, { IUserSchemaProps } from '../db/model/user';
import { makeHashPassword, comparePassword } from '../../api/utils/user.utils';
import { generateToken, validateToken } from '../../api/utils/jwt.utils';

interface IRequestUserInfoProps {
	phone?: string;
	email?: string;
	nickName?: string;
}

const router: Router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
	const { id, pw } = req.body;
	if (id === undefined || pw === undefined) {
		res.status(401); // Unauthorized
	}

	console.log(makeHashPassword(pw));

	const emailRegExp = /[^@]+@.+/;
	const phoneRegExp = /01[0-9]{9}/;
	const requestUserInfo: IRequestUserInfoProps = {};

	if (emailRegExp.test(id)) {
		requestUserInfo.email = id;
	} else if (phoneRegExp.test(id)) {
		requestUserInfo.phone = id;
	} else {
		requestUserInfo.nickName = id;
	}

	const userModel = mongoose.model('User', UserSchema);

	userModel.findOne(requestUserInfo, (err: any, userInfo: any) => {
		if (err !== null) {
			console.log(`err : ${err}`);
			res.status(401).end(); // unauthorized
			return;
		}

		if (userInfo === null || userInfo === undefined) {
			res.status(401)
				.json({
					error: 'non-existent id'
				})
				.end();
			return;
		}

		const payload = { ...userInfo._doc };
		const { password } = payload;

		delete payload.password;

		if (!comparePassword(pw, password)) {
			res.status(401)
				.json({
					error: 'incorrect password'
				})
				.end();
			return;
		}

		const jwt = generateToken(payload);
		res.status(200)
			.json({
				jwt
			})
			.end();
	});
});

export default router;

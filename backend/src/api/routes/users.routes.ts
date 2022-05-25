import express, { NextFunction, Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import UserSchema, { IUserSchemaProps } from '../db/model/user';
import { makeHashPassword, comparePassword } from '../../api/utils/user.utils';
import { generateToken } from '../../api/utils/jwt.utils';
import e from 'express';

interface IRequestUserInfoProps {
	phone?: string;
	email?: string;
	nickName?: string;
}

interface ISaveUserInfoProps {
	phone?: string;
	email?: string;
	name: string;
	nickName: string;
	password: string;
}

const router: Router = express.Router();

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
	const { id, pw } = req.body;
	if (id === undefined || pw === undefined) {
		res.status(401).send({ message: 'not entered input' }); // Unauthorized
		return;
	}

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
			res.status(401).send({
				message: 'unknown error'
			}); // unauthorized
			return;
		}

		if (userInfo === null || userInfo === undefined) {
			res.status(401).send({
				message: 'non-existent id'
			});
			return;
		}

		const payload = { ...userInfo._doc };
		const { password } = payload;

		delete payload.password;

		if (!comparePassword(pw, password)) {
			res.status(401).send({
				message: 'incorrect password'
			});
			return;
		}

		const jwt = generateToken(payload);
		res.status(200).send({
			jwt
		});
	});
});

router.post(
	'/register',
	async (req: Request, res: Response, next: NextFunction) => {
		const { id, name, nickName, pw } = req.body;
		if ([id, name, nickName, pw].includes(undefined)) {
			res.status(401).send({ message: 'not entered input' }); // Unauthorized
			return;
		}

		let idType: 'email' | 'phone' | undefined = undefined;
		const emailRegExp = /[^@]+@.+/;
		const phoneRegExp = /01[0-9]{9}/;
		const userInfo: ISaveUserInfoProps = {
			name,
			nickName,
			password: makeHashPassword(pw)
		};

		if (emailRegExp.test(id)) {
			idType = 'email';
			userInfo.email = id;
		} else if (phoneRegExp.test(id)) {
			idType = 'phone';
			userInfo.phone = id;
		} else {
			res.status(401).send({ message: 'incorrect id' });
			return;
		}

		const userModel = mongoose.model('User', UserSchema);
		try {
			const isPresent =
				(await userModel.exists({ idType: userInfo[idType] })) !== null;
			if (isPresent) {
				res.status(401).send({
					message: 'present user'
				});
				return;
			} else {
				const doc = new userModel(userInfo);
				const payload = (await doc.save()).toObject();
				delete payload.password;

				const jwt = generateToken(payload);
				res.status(200).send({
					jwt
				});
			}
		} catch (e) {
			console.log(e);
			res.status(401).send({
				message: 'unkown error'
			});
		}
	}
);

export default router;

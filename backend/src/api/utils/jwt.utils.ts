import {
	sign,
	SignOptions,
	verify,
	VerifyOptions,
	Jwt,
	JwtPayload
} from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

interface IPayload {
	id?: string;
	name?: string;
	phone?: string;
	email?: string;
	nickName: string;
}

export function generateToken(payload: IPayload) {
	const privateKey = fs.readFileSync(
		path.join(__dirname, './../../../private.key')
	);
	const signInOptions: SignOptions = {
		algorithm: 'RS256',
		expiresIn: '1h'
	};

	return sign(
		payload,
		{ key: privateKey, passphrase: process.env.PASS_PHRASE as string },
		signInOptions
	);
}

export function validateToken(
	token: string
): Promise<Jwt | JwtPayload | string | undefined> {
	const publicKey = fs.readFileSync(
		path.join(__dirname, './../../../public.key')
	);

	const verifyOptions: VerifyOptions = {
		algorithms: ['RS256']
	};

	return new Promise((resolve, reject) => {
		verify(token, publicKey, verifyOptions, (error, decoded) => {
			if (error) return reject(error);

			resolve(decoded);
		});
	});
}

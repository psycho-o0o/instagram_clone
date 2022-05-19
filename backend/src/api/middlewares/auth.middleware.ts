import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/jwt.utils';

export const authorize =
	(allowedAccessTypes: string[]) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			let jwt = req.headers.authorization;

			if (!jwt) {
				return res.status(401).json({ message: 'Invalid Token' });
			}

			if (jwt.toLowerCase().startsWith('bearer')) {
				jwt = jwt.slice('bearer'.length).trim();
			}

			const decodedToken = await validateToken(jwt);

			next();
		} catch (error: any) {
			if (error.name === 'TokenExpiredError') {
				res.status(401).json({ message: 'Expired token' });
				return;
			}

			res.status(500).json({ message: 'Failed to authenticate user' });
		}
	};

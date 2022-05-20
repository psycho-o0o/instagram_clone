import express, { NextFunction, Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import UserSchema from '../db/model/user';
import { generateToken, validateToken } from '../../api/utils/jwt.utils';

const router: Router = express.Router();
router.post('/login', (req: Request, res: Response, next: NextFunction) => {
	const { id, pw } = req.body;

	if (id === undefined || pw === undefined) {
		res.status(401); // Unauthorized
	}

	const userModel = mongoose.model('User', UserSchema);

	userModel.create({
		phone: '01081389280',
		password: 'evoDevs'
	});

	userModel.findOne({ phone : '01081389280'}, (err: any, userInfo: any) => {
		if(err !== null) {
            console.log(`err : ${err}`);
            res.status(401); // unauthorized
            return;
        } 

        if(userInfo === null || userInfo === undefined) {
            res.status(401);
        }

        const payload = {...userInfo._doc};
        delete payload.password
       
        
        
	});
});

export default router;

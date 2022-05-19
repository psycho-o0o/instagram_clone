import mongoose, { Schema } from 'mongoose';

// 참고 : https://github.com/Zwimber/mongoose-style-guide
const UserSchema = new Schema({
	__id: Schema.Types.ObjectId,
	phone: String,
	email: String,
	name: String,
	nickName: String,
	password: String
});

UserSchema.pre('save', function (next) {
	next();
});


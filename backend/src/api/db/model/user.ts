import { Schema } from 'mongoose';

export interface IUserSchemaProps {
	phone?: string;
	email?: string;
	name: string;
	nickName: string;
	password?: string;
}

// 참고 : https://github.com/Zwimber/mongoose-style-guide
const UserSchema = new Schema<IUserSchemaProps>({
	phone: {
		type: String,
		index: { unique: true, sparse: true }
	},
	email: {
		type: String,
		index: { unique: true, sparse: true }
	},
	name: { type: String, required: true },
	nickName: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique : false }
});

UserSchema.pre('save', function (next) {
	next();
});

export default UserSchema;

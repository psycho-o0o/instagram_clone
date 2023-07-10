import bcrypt from 'bcrypt';

const makeHashPassword = (password: string) => {
	const hashedPassword = bcrypt.hashSync(
		password,
		process.env.SALT as string
	);

	return hashedPassword;
};

const comparePassword = (password: string, HashedPassword: string) => {
	return bcrypt.compareSync(password, HashedPassword);
};

export { makeHashPassword, comparePassword };

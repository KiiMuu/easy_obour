import User from '../models/User.js';
import generateToken from '../utils/token.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400).json({ message: 'This email already in use' });
	}

	const newUser = await User.create({
		name,
		email,
		password,
	});

	if (newUser) {
		res.status(201).json({
			_id: newUser._id,
			name: newUser.name,
			email: newUser.email,
			token: generateToken(newUser._id),
		});
	} else {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

const login = async (req, res) => {
    const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		res.status(401).json({ message: 'Invalid email or password' });
	}
}

export {
    register,
    login,
}
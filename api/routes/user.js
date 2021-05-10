import { Router } from 'express';

const router = Router();

import { register, login } from '../controllers/user.js';

import { runValidation } from '../validators/index.js';
import { registerValidator, loginValidator } from '../validators/auth.js';

router.post('/register', registerValidator, runValidation, register);
router.post('/login', loginValidator, runValidation, login);

export default router;
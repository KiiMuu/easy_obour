import { check } from 'express-validator';

const registerValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('Please provide a name')
    .isLength({ min: 2 })
    .withMessage('At least 2 characters for name'),
    check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('At least 6 characters for password')
];

const loginValidator = [
    check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('At least 6 characters for password')
];

export { registerValidator, loginValidator }
//this file created to validate requests from both user and admin

const { check, validationResult } = require('express-validator'); //to validate requests

exports.validateSignupRequest = [
    check('firstName')
        .notEmpty()
        .withMessage('firstName is required'),
    check('lastName')
        .notEmpty()
        .withMessage('lastName is required'),
    check('email')
        .isEmail()
        .withMessage('Valid Email is required'),
    check('password')
        .isLength({ min: 4 })
        .withMessage('Password must be atleast 4 characters long'),]

exports.validateSigninRequest = [
    check('email')
        .isEmail()
        .withMessage('Valid Email is required'),
    check('password')
        .isLength({ min: 4 })
        .withMessage('Password must be atleast 4 characters long'),]


exports.isRequestValidated = (req, res, next) => {//isRequestValidated middleware initialized here
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}





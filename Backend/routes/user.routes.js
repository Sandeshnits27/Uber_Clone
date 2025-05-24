const express = require('express')
const router = express.Router();
const {body} = require('express-validator')
const userController = require('../controllers/user.controller.js')
const authMiddleware = require('../middlewares/auth.middleware.js')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),

    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),

    body('fullname.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long'),
    
    body('password').isLength({min:5}).withMessage('password must have 5 cahrracter')
],
userController.registerUser
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:5}).withMessage('password must have 5 cahrracter')
],
userController.loginUser
)

router.get('/profile',authMiddleware.authuser,userController.getUserProfile)
router.get('/logout',authMiddleware.authuser,userController.logoutUser)



module.exports = router;
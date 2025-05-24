const userModel = require ('../models/user.model.js');
const userService = require ('../services/user.service.js');
const {validationResult} = require ('express-validator');
const blacklistModel = require ('../models/blacklistToken.model.js');


module.exports.registerUser= async (req, res,next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    console.log(req.body)

    const {fullname , email , password} = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({

        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })
    const token = user.generateAuthToken();
    res.status(201).json({token,user});
}

module.exports.loginUser= async (req, res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
    console.log(req.body)
    const {email , password} = req.body;
    const user = await userModel.findOne({email}).select('+password');    
    if(!user){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
        return res.status(401).json({error: 'Invalid email or password'});
    }
    const token = user.generateAuthToken();

    res.cookie('token', token);
    res.status(200).json({token,user});
}

module.exports.getUserProfile = async (req, res,next)=>{
    res.status(200).json({user: req.user});
}

module.exports.logoutUser = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
        return res.status(400).json({ message: 'No token provided for logout' });
    }
    res.clearCookie('token');
    await blacklistModel.create({ token });
    res.status(200).json({ message: 'Logout successful' });
}
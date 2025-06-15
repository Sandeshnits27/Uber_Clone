const captainModel = require('../models/captain.model.js');
const captainService = require('../services/captain.service.js');
const { validationResult } = require('express-validator'); 

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        const { fullname, email, password, Adhaar, DrivingLicence, vehicle } = req.body;
        const existingCaptain = await captainModel.findOne({ email  });
        if (existingCaptain) {
            return res.status(400).json({ error: 'Captain with this email already exists' });
        }
        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            Adhaar,
            DrivingLicence,
            vehicle
        });

        const token = captain.generateAuthToken();
        res.status(201).json({ captain, token });

    } catch (error) {
        console.error('Error registering captain:', error.message);
        res.status(500).json({ error: error.message });
    }
};


module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({ captain, token });

    } catch (error) {
        console.error('Error logging in captain:', error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports.getCaptainProfile = async (req, res , next) =>{
     res.status(201).json({ captain: req.captain });
}
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);



    res.clearCookie('token');


    res.status(200).json({ message: 'Logged out successfully' });
}  
    
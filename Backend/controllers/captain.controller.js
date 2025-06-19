const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListTokenModel = require('../models/blackListToken.model');
const { validationResult } = require('express-validator');

// Register Captain
module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, Adhaar, DrivingLicence, vehicle } = req.body;
    console.log('BODY:', req.body);

    // Defensive checks for required fields
    if (
        !fullname || !fullname.firstname || !fullname.lastname ||
        !email || !password || !Adhaar || !DrivingLicence || !vehicle
    ) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const isCaptainAlreadyExist = await captainModel.findOne({ email });
        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain already exists' });
        }

        const hashedPassword = await captainModel.hashPassword(password);

        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            Adhaar,
            DrivingLicence,
            password: hashedPassword,
            vehicle
        });

        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
    } catch (error) {
        console.error('Error registering captain:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Login Captain
module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production'
        });

        // Remove password before sending captain object
        const captainObj = captain.toObject();
        delete captainObj.password;

        res.status(200).json({ token, captain: captainObj });
    } catch (error) {
        console.error('Error logging in captain:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get Captain Profile
module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain });
};

// Logout Captain
module.exports.logoutCaptain = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        if (token) {
            await blackListTokenModel.create({ token });
        }
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
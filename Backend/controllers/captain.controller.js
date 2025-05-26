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

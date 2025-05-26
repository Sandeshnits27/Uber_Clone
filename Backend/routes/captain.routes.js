const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller.js');

router.post('/register', [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('fullname.firstname').isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),
    body('fullname.lastname').isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),
    body('Adhaar').isLength({ min: 12, max: 12 }).withMessage('Adhaar number must be exactly 12 digits'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('DrivingLicence').isLength({ min: 10, max: 15 }).withMessage('Driving Licence must be between 10 and 15 characters long'),
    body('vehicle.plate').isLength({ min: 5 }).withMessage('Vehicle plate must be at least 5 characters long'),
    body('vehicle.color').isLength({ min: 2 }).withMessage('Vehicle color must be at least 2 characters long'),
    body('vehicle.vehicletype').isIn(['car', 'bike', 'auto', 'van', 'eriksha']).withMessage('Invalid vehicle type'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
], captainController.registerCaptain);

module.exports = router;

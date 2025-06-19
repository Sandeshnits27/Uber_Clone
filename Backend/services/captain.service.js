const {model} = require('mongoose')
const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    Adhaar,
    password,
    DrivingLicence,
    vehicle    
}) => {
    if (
        !firstname?.trim() || !lastname?.trim() || !email?.trim() ||
        !Adhaar?.trim() || !password || !DrivingLicence?.trim() ||
        !vehicle || 
        !vehicle.color?.trim() || 
        !vehicle.plate?.trim() || 
        typeof vehicle.capacity !== 'number' || 
        !['car', 'motorcycle', 'auto'].includes(vehicle.vehicleType)
    ) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: { firstname, lastname },
        Adhaar,
        password,
        DrivingLicence,
        email,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        }
    });
    return captain;
}

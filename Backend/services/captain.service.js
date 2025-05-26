const {model} = require('mongoose')
const captainModel = require('../models/captain.model.js');


module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    Adhaar,
    password,
    DrivingLicence,
    vehicle // <-- Accept the whole vehicle object
})=>{
    if (
        !firstname || !lastname || !email || !Adhaar || !password || !DrivingLicence ||
        !vehicle || !vehicle.color || !vehicle.plate || !vehicle.capacity || !vehicle.vehicletype
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
            vehicletype: vehicle.vehicletype
        }
    });
    return captain;
}
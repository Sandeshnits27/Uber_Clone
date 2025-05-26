const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [2, 'First name must be at least 2 characters long'],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [2, 'Last name must be at least 2 characters long'],
        }
    },
    Adhaar: {
        type: String,
        required: true,
        unique: true,
        minlength: [12, 'Adhaar number must be 12 digits'],
        maxlength: [12, 'Adhaar number must be 12 digits'],
    },
    DrivingLicence: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Driving Licence must be at least 10 characters'],
        maxlength: [15, 'Driving Licence must not exceed 15 characters'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
    },
    socketId: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'banned'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [2, 'Vehicle color must be at least 2 characters long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [5, 'Vehicle plate must be at least 5 characters long']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Vehicle capacity must be at least 1']
        },
        vehicletype: {
            type: String,
            required: true,
            enum: ['car', 'bike', 'auto', 'van', 'eriksha']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
}, { timestamps: true });

// Instance Methods
captainSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Static Method
captainSchema.statics.hashPassword = async function (password) {
    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
    return await bcrypt.hash(password, saltRounds);
};

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;

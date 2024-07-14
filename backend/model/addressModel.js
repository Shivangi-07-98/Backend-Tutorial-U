const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Address', addressSchema);
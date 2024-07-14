const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    
    cardNumber: {
        type: String,
        required: true
    },
    expiry: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    },
    cardHolderName: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model('Payment', paymentSchema);
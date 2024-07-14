const payment1 = require('../model/paymentModel');

const payment = async (req, res) => {

    try{
        const {cardNumber, expiry, cvv, cardHolderName} = req.body;

        const value = new payment1({
            cardNumber: cardNumber,
            expiry: expiry,
            cvv: cvv,
            cardHolderName: cardHolderName
        })
        await value.save();
        
        res.send('payment from backend')

    }catch(error){
        res.send('error', error);
    }

}


module.exports = {payment};
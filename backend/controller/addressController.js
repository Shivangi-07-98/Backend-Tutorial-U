const address1 = require('../model/addressModel');

const address = async (req, res) => {

    try{
        const {name, address, pincode, contactNumber} = req.body;

        const value = new address1({
            name: name,
            address: address,
            pincode: pincode,
            contactNumber: contactNumber
        })
        await value.save();
        res.send('address from backend')

    }catch(error){
        res.send('error', error);
    }

}


module.exports = {address};
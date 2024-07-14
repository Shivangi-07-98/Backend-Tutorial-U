const auth = require('../model/authModel');

const signup = async (req, res) => {
    try {
        const { name, email, password, contactNumber } = req.body;

        const value = new auth({
            name: name,
            email: email,
            password: password,
            contactNumber: contactNumber
        })

        await value.save();

        res.send('signed up successfully')

    } catch (error) {
        res.send("error", error);
    }
}

const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const value = await auth.findOne({ email });
        // console.log(value);

        if (!value) {
            return res.status(404).json({ msg: "User not found" });
        }

        if (value.password != password) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        
        // console.log(abc); // for server error

        res.json({
            msg: "logged in successfully",
            data: value
        })



    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}

// reset password => email shi hai but password yaad nhi
// number => otp
// email => mail 

module.exports = { signup, login };
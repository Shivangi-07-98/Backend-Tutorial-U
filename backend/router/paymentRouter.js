const express = require('express');
const Router = express.Router();


const {payment} = require('../controller/paymentController');
Router.post('/payment', payment);

module.exports = Router;
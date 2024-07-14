const express = require('express');
const Router = express.Router();

const {address} = require('../controller/addressController');

Router.post('/address', address);

module.exports = Router;
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
// // Load environment variables from a .env file
// dotenv.config();
const path = require('path');

const app = express();
app.use(express.json());


// Configure CORS options
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  // allowedHeaders: 'Content-Type,Authorization', // Allow necessary headers
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// ---------------------------------------------------------------------------

const address = require('./router/addressRouter');
app.use('/api', address);

// ----------------------------------------------------------------------------


// Connect to MongoDB
mongoose.connect(MONGODB_URI)

  .then(
    () => {
      console.log('Connected to MongoDB');

      app.get('/', (req, res) => {
        res.send('Hello World')
      })

      app.listen(PORT, () => {
        console.log(`server is running at port ${PORT}`);
      })
    }
  ).catch(
    (err) => {
      console.error('Error connecting to MongoDB:', err.message);
    }
  );

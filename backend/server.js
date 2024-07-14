require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
// // Load environment variables from a .env file
// dotenv.config();
const path = require('path');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Configure CORS options
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  // allowedHeaders: 'Content-Type,Authorization', // Allow necessary headers
};

app.use(cors(corsOptions));

// ---------------------------------------------------------------------------

const auth = require('./router/authRouter');
const address = require('./router/addressRouter');
const payment = require('./router/paymentRouter')
app.use('/api', auth);
app.use('/api', address);
app.use('/api', payment);



// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A joke',
      content: 'This is a joke'
    },
    {
      id: 2,
      title: 'Another joke',
      content: 'This is another joke'
    },
    {
      id: 3,
      title: 'A third joke',
      content: 'This is a third joke'
    },
    {
      id: 4,
      title: 'A fourth joke',
      content: 'This is a fourth joke'
    },
    {
      id: 5,
      title: 'A fifth joke',
      content: 'This is a fifth joke'
    },
  ];
  res.send(jokes);
});



// ----------------------------------------------------------------------------


// Connect to MongoDB
mongoose.connect(MONGODB_URI)

  .then(
    () => {
      console.log('Connected to MongoDB');

      app.get('/', (req, res) => {
        res.send('Server started')
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


const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

// Load Keys
const keys = require('./config/keys');

// Mongoose Connect
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

// App init
const app = express();

// Routes
app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server start on port ${port}`) });
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Passport Config
require('./config/passport')(passport);

const app = express();


app.use('/auth', require('./routes/auth'));

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server start on port ${port}`) });
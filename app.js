const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server start on port ${port}`) });
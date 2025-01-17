
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const configmongo = require('./config/DB');

const userrouter = require('./routes/userroutes');
const adminrouter = require('./routes/adminroutes');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

//DB configuration
configmongo();

//middleware

app.use('/api/user',userrouter)
app.use('/api/admin',adminrouter);


//listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
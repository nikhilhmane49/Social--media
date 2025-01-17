const express = require('express');

const { adminLogin, adminregester , getalluser } = require('../controller/admincontroller.js');
const authadmin = require('../midellware/Authadmin.js');
const adminrouter = express.Router();


adminrouter.post('/login',  adminLogin);
adminrouter.post('/regester', adminregester);
adminrouter.post('/alluser', authadmin, getalluser );
 


module.exports = adminrouter;

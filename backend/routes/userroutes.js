const express = require('express');

const { adduser } =require('../controller/usercontroller.js');
const  upload  = require('../midellware/multer');

const userrouter = express.Router();

userrouter.post('/adduser', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }, { name: 'image4', maxCount: 1 }]), adduser);

module.exports = userrouter;
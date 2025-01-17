const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    social: { type: String, required: true },
    image: { type: Array, required: true }
});
    const userModel = mongoose.models.user || mongoose.model('user',userSchema);

module.exports =userModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    account: String,
    name: String,
    profileImg: Buffer,
    about: String,
    contractAddress: String,

},{ _id : false })
module.exports = mongoose.model('USER', userSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    education: String,
});

module.exports = mongoose.model("User", userSchema);


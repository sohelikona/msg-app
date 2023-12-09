const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        minlength: 3,
        maxlength: 20,
        unique: true,
    },
    email: {
        type: String,
        // required: true,
        minlength: 3,
        maxlength: 30,
        unique: true,
    },
    password: {
        type: String,
        // required: true,
        minlength: 8,
    },
    isAvatarImageSet: {
        type: Boolean,
       default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
    isOnline: { 
        type: Boolean, 
        default: false 
    }, 
    lastSeen: { 
        type: Date, 
        default: Date.now 
    } 
    
})

module.exports = mongoose.model("users", userSchema)
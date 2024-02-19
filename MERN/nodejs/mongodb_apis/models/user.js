const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 20,
            required: true
        },
        email: {
            type: String,
            maxLength: 30,
            required: true,
            unique: true
        },
        password: {
            type: String,
            maxLength: 30,
            required: true
        },
        dob: {
            type: String
        },
        status: {
            type: Boolean,
            default: true
            // true : active , false: inactive
        }
    },
    {
        timestamps: true
    }
)


const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
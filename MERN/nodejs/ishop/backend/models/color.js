const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        code: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const Color = mongoose.model("Color", ColorSchema);

module.exports = Color;
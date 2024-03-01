const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        discount_precent: {
            type: Number,
            default: 0
        },
        discount_price: {
            type: Number
        },
        image: {
            type: String
        },
        category_id: {
            type: mongoose.Schema.ObjectId,
            ref: "Category"
        },
        color: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'Color'
            }
        ],
        status: {
            type: Boolean,
            default: true
        },
        stock: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
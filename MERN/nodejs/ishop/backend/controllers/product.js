const Product = require("../models/product");
const Category = require("../models/category");
const Color = require("../models/color");
const mongoose = require('mongoose');

class ProductController {
    create(data, image) {
        return new Promise(
            (res, rej) => {
                try {
                    console.log("color", data.color);
                    const imageName = new Date().getTime() + Math.floor(Math.random() * 1000) + image.name;
                    const destination = "./public/images/product/" + imageName;
                    image.mv(
                        destination,
                        (err) => {
                            if (err) {
                                rej({
                                    msg: "Unable to upload image",
                                    status: 0
                                })
                            } else {
                                const product = new Product({
                                    name: data.name,
                                    slug: data.slug,
                                    price: data.price,
                                    discount_precent: data.discount_precent,
                                    discount_price: data.discount_price,
                                    image: imageName,
                                    category_id: data.category,
                                    color: JSON.parse(data.color)
                                })
                                product.save()
                                    .then(
                                        () => {
                                            res({
                                                msg: "Data added successfully",
                                                status: 1
                                            })
                                        }
                                    ).catch(
                                        (err) => {
                                            console.log(err.message);
                                            rej({
                                                msg: "Unable to add data",
                                                status: 0
                                            })
                                        }
                                    )
                            }
                        }
                    )
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    read(id, query) {
        return new Promise(
            async (res, rej) => {
                try {
                    const dbQuery = {};
                    if (query.category_slug) {
                        const category = await Category.findOne({ slug: query.category_slug });
                        if (category != null) {
                            dbQuery.category_id = category._id
                        }
                    }
                    if (query.color_id != "null") {
                        const color = await Color.findById(query.color_id);
                        if (color != null) {
                            dbQuery.color = color._id;
                        }
                    }
                    console.log(dbQuery);
                    let product = [];
                    if (id) {
                        product = await Product.findById(id).populate(['category_id', 'color']);
                    } else {
                        if (query.limit != 0) {
                            product = await Product.find(dbQuery).populate(['category_id', 'color'])
                                .limit(query.limit);
                        } else {
                            product = await Product.find(dbQuery).populate(['category_id', 'color']);
                        }

                    }
                    res({
                        msg: "Product found",
                        status: 1,
                        product,
                        imageBaseUrl: "/images/product/"
                    })
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    updateStatus(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    edit(id, data) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                } catch (err) {
                    rej({
                        msg: 'Internal server error',
                        status: 0
                    })
                }
            }
        )
    }
}

module.exports = ProductController;
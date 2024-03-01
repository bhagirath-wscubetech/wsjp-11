const Product = require("../models/product")

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
    read(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    let product = [];
                    if (id) {
                        product = await Product.findById(id).populate(['category_id', 'color']);
                    } else {
                        product = await Product.find().populate(['category_id', 'color']);
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
const Category = require('../models/category');
const { unlinkSync } = require("fs");

class CategoryController {
    create(data, image) {
        return new Promise(
            (res, rej) => {
                try {
                    // 123432534634531.jpg
                    // 346547567561.jpg
                    const imageName = new Date().getTime() + Math.floor(Math.random() * 1000) + image.name
                    const destination = "./public/images/category/" + imageName;
                    image.mv(
                        destination,
                        (err) => {
                            if (err) {
                                rej({
                                    msg: "Unable to upload the file",
                                    status: 0
                                })
                            } else {
                                const category = new Category({
                                    name: data.name,
                                    slug: data.slug,
                                    image: imageName
                                });
                                category.save()
                                    .then(
                                        (success) => {
                                            res({
                                                msg: "Category added",
                                                status: 1
                                            })
                                        }
                                    )
                                    .catch(
                                        () => {
                                            rej({
                                                msg: "Unable to add category",
                                                status: 0
                                            })
                                        }
                                    )
                            }
                        }
                    )

                } catch (err) {
                    rej({
                        msg: "Internal server error",
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
                    let data = "";
                    if (id) {
                        data = await Category.findById(id);
                    } else {
                        data = await Category.find();
                    }
                    res(
                        {
                            msg: "Data found",
                            category: data,
                            status: 1,
                            imageBaseUrl: "/images/category/"
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

    delete(id) {
        return new Promise(
            (res, rej) => {
                try {
                    Category.deleteOne({ _id: id })
                        .then(
                            () => {
                                res({
                                    msg: "Data deleted",
                                    status: 1
                                })
                            }
                        ).catch(
                            () => {
                                rej({
                                    msg: "Unable to delete",
                                    status: 0
                                })
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

    changeStatus(id, new_status) {
        return new Promise(
            (res, rej) => {
                try {
                    Category.updateOne(
                        {
                            _id: id
                        },
                        {
                            status: new_status
                        }
                    ).then(
                        () => {
                            res({
                                msg: "Status changed",
                                status: 1
                            })
                        }
                    ).catch(
                        () => {
                            rej({
                                msg: "Unable to change the status",
                                status: 0
                            })
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

    update(id, data, image) {
        return new Promise(
            (res, rej) => {
                try {
                    if (image == null) {
                        Category.updateOne({ _id: id }, { name: data.name, slug: data.slug })
                            .then(
                                () => {
                                    res({
                                        msg: "Data updated",
                                        status: 1
                                    })
                                }
                            ).catch(
                                () => {
                                    rej({
                                        msg: "Unable to update the data",
                                        status: 1
                                    })
                                }
                            )
                    } else {
                        const imageName = new Date().getTime() + Math.floor(Math.random() * 1000) + image.name
                        const destination = "./public/images/category/" + imageName;
                        image.mv(
                            destination,
                            (err) => {
                                if (!err) {
                                    Category.updateOne(
                                        { _id: id },
                                        { name: data.name, slug: data.slug, image: imageName }
                                    )
                                        .then(
                                            () => {
                                                unlinkSync(`./public/images/category/${data.old_name}`);
                                                res({
                                                    msg: "Data updated",
                                                    status: 1
                                                })
                                            }
                                        ).catch(
                                            () => {
                                                rej({
                                                    msg: "Unable to update the data",
                                                    status: 0
                                                })
                                            }
                                        )
                                } else {
                                    rej({
                                        msg: "Unable to upload file",
                                        status: 0
                                    })
                                }
                            }
                        )
                    }
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

module.exports = CategoryController;
const UserModel = require('../models/user');

class UserController {
    read(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let data = "";
                    if (id) {
                        data = await UserModel.findById(id);
                    } else {
                        data = await UserModel.find();
                    }
                    resolve({
                        data,
                        msg: "User data",
                        status: 1
                    })
                } catch (err) {
                    reject({
                        msg: "Internal server error",
                        status: 0
                    })
                }
            }
        )
    }

    create(data) {
        return new Promise(
            async (res, rej) => {
                try {
                    const existingUser = await UserModel.findOne({ email: data.email });
                    if (existingUser == null) {
                        const user = new UserModel(
                            {
                                name: data.name,
                                email: data.email,
                                password: data.password,
                                dob: data?.dob
                            }
                        );
                        user.save()
                            .then(
                                () => {
                                    res({
                                        msg: "User added",
                                        status: 1
                                    })
                                }
                            ).catch(
                                (error) => {
                                    res({
                                        msg: "Unable to add the user",
                                        status: 0
                                    })
                                }
                            )
                    } else {
                        rej({
                            msg: "Email already exists",
                            status: 0
                        })
                    }
                } catch (err) {
                    rej({
                        msg: "Internal server error",
                        status: 0
                    })
                }

            }
        )
    }

    delete(id) {
        return new Promise(
            async (res, rej) => {
                try {
                    const existingUser = await UserModel.findById(id);
                    if (existingUser == null) {
                        rej({
                            msg: "User with given id does not exists",
                            status: 0
                        })
                    } else {
                        UserModel.deleteOne({ _id: id })
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
                                        msg: "Unable to delete the data",
                                        status: 0
                                    })
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

    update(id, newData) {
        return new Promise(
            async (res, rej) => {
                try {
                    UserModel.updateOne({ _id: id }, newData)
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
}


module.exports = UserController;
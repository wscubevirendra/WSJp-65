const colorModel = require('../modules/colorModel');


class colorController {
    create(data) {
        return new Promise((resolve, reject) => {
            try {
                if (!data.name || !data.colorCode) {
                    reject(
                        {
                            msg: "Please provide all required fields",
                            status: 0
                        }
                    )
                    return
                }
                const color = new colorModel({
                    name: data.name,
                    colorCode: data.colorCode
                })

                color.save().then(
                    () => {
                        resolve(
                            {
                                msg: "Color created",
                                status: 1
                            }
                        )
                    }
                ).catch(
                    () => {
                        reject(
                            {
                                msg: "Unable to create color",
                                status: 0
                            }
                        )

                    }
                )

            } catch (error) {
                reject(
                    {
                        msg: "Internal server error",
                        status: 0
                    }
                )
            }
        })
    }

    get(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    let color = null;
                    if (id == null) {
                        color = await colorModel.find();

                    } else {
                        color = await colorModel.findById(id);
                    }


                    if (color) {
                        resolve(
                            {
                                msg: "Color find",
                                status: 1,
                                color: color
                            }
                        )

                    } else {
                        reject(
                            {
                                msg: "Unable to find color",
                                status: 0
                            }
                        )
                    }

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )

                }
            }
        )

    }

    status(id) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const color = await colorModel.findById(id);
                    if (color) {
                        colorModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    status: !color.status
                                }
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Status updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update status",
                                        status: 0
                                    }
                                )
                            }
                        )

                    }


                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }

    delete(id) {
        return new Promise(
            (resolve, reject) => {
                try {
                    colorModel.deleteOne(
                        {
                            _id: id
                        }
                    ).then(
                        () => {
                            resolve(
                                {
                                    msg: "Color deleted",
                                    status: 1
                                }
                            )

                        }
                    ).catch(
                        () => {
                            reject(
                                {
                                    msg: "Unable to delete color",
                                    status: 0
                                }
                            )

                        }
                    )

                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )
    }

    update(id, data) {
        return new Promise(
            async (resolve, reject) => {
                try {
                    const color = await colorModel.findById(id);
                    if (color) {
                        colorModel.updateOne(
                            { _id: id },
                            {
                                $set: {
                                    name: data.name,
                                    colorCode: data.colorCode
                                }
                            }
                        ).then(
                            () => {
                                resolve(
                                    {
                                        msg: "Color updated",
                                        status: 1
                                    }
                                )
                            }
                        ).catch(
                            () => {
                                reject(
                                    {
                                        msg: "Unable to update color",
                                        status: 0
                                    }
                                )
                            }
                        )

                    }


                } catch (error) {
                    reject(
                        {
                            msg: "Internal server error",
                            status: 0
                        }
                    )
                }
            }
        )

    }
}

module.exports = colorController;
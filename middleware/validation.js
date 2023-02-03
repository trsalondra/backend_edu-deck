const Joi = require("@hapi/joi")

const registerValidation = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        userName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
    })

    return schema.validateAsync(data)
}

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required()
    })
    return schema.validateAsync(data)
}

module.exports = {
    registerValidation,
    loginValidation
}

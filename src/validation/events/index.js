const {validate, Joi} = require("express-validation")

module.exports = validate({
    body: Joi.object({
        name:Joi.string().required(),
        poster:Joi.string().required(),
        attractions:Joi.array().required(),
        description:Joi.string().required(),
        scheduled:Joi.date().required(),
        number_tickets:Joi.number().required()
    })
})
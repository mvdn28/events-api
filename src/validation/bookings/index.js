const {validate, Joi} = require("express-validation")

module.exports = validate({
    body: Joi.object({
        owner_name:Joi.string().required(),
        owner_email:Joi.string().required(),
        number_tickets:Joi.number().required(),
        event_id:Joi.number().required()
    })
})
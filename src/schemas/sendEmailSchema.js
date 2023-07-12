import * as Joi from 'joi';

const firstName = Joi.string().allow("");
const lastName = Joi.string().allow("");
const company = Joi.string();
const email = Joi.string()
const message = Joi.string();


const sendEmailSchema = Joi.object({
    firstName,
    lastName,
    company: company.required(),
    email: email.required(),
    message: message.required()
});

export {sendEmailSchema};
import Joi from "joi";

const signInBobySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export {signInBobySchema};
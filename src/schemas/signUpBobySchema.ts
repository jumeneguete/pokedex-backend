import Joi from "joi";

const signUpBobySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
});

export {signUpBobySchema};
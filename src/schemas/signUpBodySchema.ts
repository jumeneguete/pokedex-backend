import Joi from "joi";

const signUpBodySchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
});

export {signUpBodySchema};
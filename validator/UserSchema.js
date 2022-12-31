const Joi = require("joi");


exports.SendPhoneSchema = Joi.object().keys({
    phone: Joi.string().min(11).max(11).required(),
  });


exports.RegisterVerifyCodeSchema =  Joi.object().keys({
    phone: Joi.string().min(11).max(11).required(),

    fullname: Joi.string().required().min(3).max(50),
 
    password: Joi.string().min(4).max(12).required(),

    code: Joi.string().required(),
});


exports.LoginSchama = Joi.object().keys({
    phone: Joi.string().min(11).max(11).required(),
    password: Joi.string().min(4).max(12).required(),
});


exports.ResetPasswordSchama = Joi.object().keys({
    password: Joi.string().min(4).max(12).required()
});


exports.SendCodeSchema = Joi.object().keys({
    code: Joi.string().min(11).max(11).required(),
});

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const validateCreateRestaurant = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required()
  });
  return schema.validate(data);
};

module.exports = { validateCreateRestaurant };

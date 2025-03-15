import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const ImageSpec = {
  title: Joi.string().required(),
  imageUrl: Joi.string().required(),
  description: Joi.string().allow("").optional(),
};

export const LocationSpec = {
  title: Joi.string().required(),
  description: Joi.string().allow("").optional(),
  category: Joi.string().required(),
  latitude: Joi.number().allow("").optional(),
  longitude: Joi.number().allow("").optional(),
};
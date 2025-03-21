import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const ImageSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Awesome View"),
    imageUrl: Joi.string().required().example("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/c2/11/28/awesome-walls-dublin.jpg?w=1000&h=600&s=1"),
    description: Joi.string().allow("").optional().example("Awesome Walls Dublin is one of the largest and most modern indoor climbing centres in Europe catering for individuals, groups and birthday parties."),
    locationid: IdSpec,
  })
  .label("ImageDetails");

export const ImageSpecPlus = ImageSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("ImageDetailsPlus");

export const ImageArraySpec = Joi.array().items(ImageSpecPlus).label("ImageArray");


export const LocationSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Awesome Walls"),
    description: Joi.string().required().example("Premier indoor climbing facility in Ireland"),
    category: Joi.string().required().example("Indoor Climbing"),
    latitude: Joi.number().allow("").optional().example(53.40181469611018),
    longitude: Joi.number().allow("").optional().example(-6.316292754371287),
    userid: IdSpec,
    images: ImageArraySpec,
  })
  .label("LocationDetails");

export const LocationSpecPlus = LocationSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("LocationDetailsPlus");

export const LocationArraySpec = Joi.array().items(LocationSpecPlus).label("LocationArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");



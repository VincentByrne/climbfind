import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, ImageSpec, ImageSpecPlus, ImageArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

export const imageApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const images = await db.imageStore.getAllImages();
        return images;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: ImageArraySpec, failAction: validationError },
    description: "Get all images",
    notes: "Returns all climbing location images",
  },

  findOne: {
    auth: false,
    async handler(request) {
      try {
        const image = await db.imageStore.getImageById(request.params.id);
        if (!image) {
          return Boom.notFound("No image with this id");
        }
        return image;
      } catch (err) {
        return Boom.serverUnavailable("No image with this id");
      }
    },
    tags: ["api"],
    description: "Find an Image",
    notes: "Returns details of a climbing location image",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: ImageSpecPlus, failAction: validationError },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const image = await db.imageStore.addImage(request.params.id, request.payload);
        if (image) {
          return h.response(image).code(201);
        }
        return Boom.badImplementation("error creating image");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create an image",
    notes: "Returns the newly created climbing location image",
    validate: { payload: ImageSpec, failAction: validationError },
    response: { schema: ImageSpecPlus, failAction: validationError },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.imageStore.deleteAllImages();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all images",
    notes: "Removes all climbing location images from the system",
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const image = await db.imageStore.getImageById(request.params.id);
        if (!image) {
          return Boom.notFound("No Image with this id");
        }
        await db.imageStore.deleteImage(image._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Image with this id");
      }
    },
    tags: ["api"],
    description: "Delete an image",
    notes: "Deletes a specific climbing location image",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },
};
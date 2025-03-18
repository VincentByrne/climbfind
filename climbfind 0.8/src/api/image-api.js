import Boom from "@hapi/boom";
import { db } from "../models/db.js";

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
  },
};

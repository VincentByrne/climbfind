import { db } from "../models/db.js";
import { ImageSpec } from "../models/joi-schemas.js";


export const locationController = {
  index: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const viewData = {
        title: "Climbing Location",
        location: location,
      };
      return h.view("location-view", viewData);
    },
  },

  addImage: {
    validate: {
      payload: ImageSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("locationlist-view", { title: "Add image error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newImage = {
        title: request.payload.title,
        imageUrl: request.payload.imageUrl,
        description: request.payload.description,
      };
      await db.imageStore.addImage(location._id, newImage);
      return h.redirect(`/location/${location._id}`);
    },
  },

  deleteImage: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      await db.imageStore.deleteImage(request.params.imageid);
      return h.redirect(`/location/${location._id}`);
    },
  },
};

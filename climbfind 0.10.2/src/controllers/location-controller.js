import { db } from "../models/db.js";
import { ImageSpec } from "../models/joi-schemas.js";
import { cloudinaryStore } from "../models/cloudinary-store.js";


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

  uploadImage: {
    handler: async function (request, h) {
      try {
        const location = await db.locationStore.getLocationById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await cloudinaryStore.uploadImage(request.payload.imagefile);
          location.img = url;
          await db.locationStore.updateLocation(location);
        }
        return h.redirect(`/location/${location._id}`);
      } catch (err) {
        console.log(err);
        // eslint-disable-next-line no-restricted-globals
        return h.redirect(`/location/${location._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  
};

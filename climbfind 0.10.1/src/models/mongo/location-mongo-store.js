import Mongoose from "mongoose";
import { Location } from "./location.js";
import { imageMongoStore } from "./image-mongo-store.js";

export const locationMongoStore = {
  async getAllLocations() {
    const locations = await Location.find().lean();
    return locations;
  },

  async getLocationById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const location = await Location.findOne({ _id: id }).lean();
      if (location) {
        location.images = await imageMongoStore.getImagesByLocationId(location._id);
      }
      return location;
    }
    return null;
  },

  async addLocation(location) {
    const newLocation = new Location(location);
    const locationObj = await newLocation.save();
    return this.getLocationById(locationObj._id);
  },

  async getUserLocations(id) {
    const locations = await Location.find({ userid: id }).lean();
    return locations;
  },

  async deleteLocationById(id) {
    try {
      await Location.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllLocations() {
    await Location.deleteMany({});
  }
};
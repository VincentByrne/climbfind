import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const imageJsonStore = {
  async getAllImages() {
    await db.read();
    return db.data.images;
  },

  async addImage(locationId, image) {
    await db.read();
    image._id = v4();
    image.locationid = locationId;
    db.data.images.push(image);
    await db.write();
    return image;
  },

  async getImagesByLocationId(id) {
    await db.read();
    return db.data.images.filter((image) => image.locationid === id);
  },

  async getImageById(id) {
    await db.read();
    return db.data.images.find((image) => image._id === id);
  },

  async deleteImage(id) {
    await db.read();
    const index = db.data.images.findIndex((image) => image._id === id);
    db.data.images.splice(index, 1);
    await db.write();
  },

  async deleteAllImages() {
    db.data.images = [];
    await db.write();
  },
};
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
    let foundImages = db.data.images.filter((image) => image.locationid === id);
    if (!foundImages) {
      foundImages = null;
    }
    return foundImages;
  },

  async getImageById(id) {
    await db.read();
    let foundImage = db.data.images.find((image) => image._id === id);
    if (!foundImage) {
      foundImage = null;
    }
    return foundImage;
  },

  async getLocationImages(locationId) {
    await db.read();
    let foundImages = db.data.images.filter((image) => image.locationid === locationId);
    if (!foundImages) {
      foundImages = null;
    }
    return foundImages;
  },

  async deleteImage(id) {
    await db.read();
    const index = db.data.images.findIndex((image) => image._id === id);
    if (index !== -1) db.data.images.splice(index, 1);
    await db.write();
  },

  async deleteAllImages() {
    db.data.images = [];
    await db.write();
  },

  async updateImage(image, updatedImage) {
    image.title = updatedImage.title;
    image.imageUrl = updatedImage.imageUrl;
    image.description = updatedImage.description;
    await db.write();
  },
};
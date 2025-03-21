import { v4 } from "uuid";

let images = [];

export const imageMemStore = {
  async getAllImages() {
    return images;
  },

  async addImage(locationId, image) {
    image._id = v4();
    image.locationid = locationId;
    images.push(image);
    return image;
  },

  async getImagesByLocationId(id) {
    return images.filter((image) => image.locationid === id);
  },

  async getImageById(id) {
    return images.find((image) => image._id === id);
  },

  async getLocationImages(locationId) {
    return images.filter((image) => image.locationid === locationId);
  },

  async deleteImage(id) {
    const index = images.findIndex((image) => image._id === id);
    if (index !== -1) {
      images.splice(index, 1);
    }
  },

  async deleteAllImages() {
    images = [];
  },

  async updateImage(image, updatedImage) {
    image.title = updatedImage.title;
    image.imageUrl = updatedImage.imageUrl;
    image.description = updatedImage.description;
  },
};
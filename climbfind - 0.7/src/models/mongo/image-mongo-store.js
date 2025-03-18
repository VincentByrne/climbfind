import Mongoose from "mongoose";
import { Image } from "./image.js";

export const imageMongoStore = {
  async getAllImages() {
    const images = await Image.find().lean();
    return images;
  },

  async addImage(locationId, image) {
    image.locationid = locationId;
    const newImage = new Image(image);
    const imageObj = await newImage.save();
    return this.getImageById(imageObj._id);
  },

  async getImagesByLocationId(id) {
    const images = await Image.find({ locationid: id }).lean();
    return images;
  },

  async getImageById(id) {
    if (Mongoose.isValidObjectId(id)) {
      const image = await Image.findOne({ _id: id }).lean();
      return image;
    }
    return null;
  },

  async deleteImage(id) {
    try {
      await Image.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllImages() {
    await Image.deleteMany({});
  },

  async updateImage(image, updatedImage) {
    const imageDoc = await Image.findOne({ _id: image._id });
    imageDoc.title = updatedImage.title;
    imageDoc.imageUrl = updatedImage.imageUrl;
    imageDoc.description = updatedImage.description;
    await imageDoc.save();
  },
};
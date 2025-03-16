import { Image } from "./image.js";

export const imageMongoStore = {
  async getAllImages() {
    const images = await Image.find().lean();
    return images;
  }
};
import Mongoose from "mongoose";

const { Schema } = Mongoose;

const imageSchema = new Schema({
  title: String,
  imageUrl: String,
  description: String,
  locationid: {
    type: Schema.Types.ObjectId,
    ref: "Location",
  },
});

export const Image = Mongoose.model("Image", imageSchema);
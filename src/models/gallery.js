import mongoose, { Schema, models } from "mongoose";

const gallerySchema = new Schema(
  {
    projectName: {
      type: String,
    },
    company: {
      type: String,
    },
    description: {
      type: String,
    },
    imageUrl: {
      type: String,
    },
  },

  { timestamps: true }
);

const Gallery = models.Gallery || mongoose.model("Gallery", gallerySchema);
export default Gallery;

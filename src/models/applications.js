import mongoose, { Schema, models } from "mongoose";

const applicationsSchema = new Schema({
  job: {
    type: String,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const Applications =
  models.Applications || mongoose.model("Applications", applicationsSchema);
export default Applications;

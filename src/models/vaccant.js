import mongoose, { Schema, models } from "mongoose";

const vaccantSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    duties: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    contract: {
      type: String,
    },
    salary: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Vaccant = models.Vaccant || mongoose.model("Vaccant", vaccantSchema);
export default Vaccant;

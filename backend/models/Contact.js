import mongoose from "mongoose";

// One document per contact form message, stored in the "contacts" collection.
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: true },
);

export default mongoose.model("Contact", contactSchema);

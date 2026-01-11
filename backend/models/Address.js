import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    pincode: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    house: { type: String, required: true },
    area: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Address", addressSchema);

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    tid: { type: String, required: true, unique: true },
    amount: { type: String, required: true },
    payType: { type: String, required: true },
    upi: { type: String, required: true },
    status: { type: String, default: "created" }, // created, success, failed
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Transaction", transactionSchema);

import express from "express";
import Address from "../models/Address.js";

const router = express.Router();

/* SAVE ADDRESS */
router.post("/", async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();

    res.status(201).json({
      success: true,
      message: "Address saved successfully",
      address,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to save address",
    });
  }
});

export default router;

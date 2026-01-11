import express from "express";
import { createPayment } from "../utils/paymentHelpers.js";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const result = createPayment(req.body);

    await Transaction.create({
      tid: result.tid,
      amount: result.amount,
      payType: req.body.payType,
      upi: req.body.upi,
      status: "created",
    });

    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

import express from "express";
import {payHereHash} from "../controllers/paymentController.js";


const router = express.Router();

router.route('/payment-hash').post(payHereHash);

export default router;
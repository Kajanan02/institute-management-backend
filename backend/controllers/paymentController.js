import asyncHandler from "express-async-handler";
import CryptoJS from 'crypto-js';


const payHereHash = asyncHandler(async (req, res) => {
    const {amount, orderId} = req.body;
    let merchantSecret  = process.env.MERCHANT_SECRET;
    let merchantId      = process.env.MERCHANT_ID;
    let hashedSecret    = CryptoJS.MD5(merchantSecret).toString().toUpperCase();
    let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
    let currency        = 'LKR';
    let hash            = CryptoJS.MD5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();

    res.send(hash);

})

export {payHereHash}
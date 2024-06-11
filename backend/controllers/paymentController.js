import asyncHandler from "express-async-handler";
import md5 from "crypto-js/md5";

app.get("/payment-hash", (req, res) => {

    res.send("hash");
});

const payHereHash = asyncHandler(async (req, res) => {
    // const {amount, orderId} = req.body;
    // let merchantSecret  = process.env.MERCHANT_SECRET;
    // let merchantId      = process.env.MERCHANT_ID;
    // let hashedSecret    = md5(merchantSecret).toString().toUpperCase();
    // let amountFormated  = parseFloat( amount ).toLocaleString( 'en-us', { minimumFractionDigits : 2 } ).replaceAll(',', '');
    // let currency        = 'LKR';
    // let hash            = md5(merchantId + orderId + amountFormated + currency + hashedSecret).toString().toUpperCase();

    res.send("Hello");

})

export {payHereHash}
const express = require("express")
const httpProxy = require('express-http-proxy')

const router=express.Router();

const tradeProxy=httpProxy(process.env.TRADE_SERVICE);



let tradeRoute=(req, res, next) => {

    console.log
  tradeProxy(req, res, next)
};
router.get("",tradeRoute);


router.get("/:id",tradeRoute)

router.put("/:id",tradeRoute)

router.delete("/:id",tradeRoute)

router.post("",tradeRoute)


module.exports=router;
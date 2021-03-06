let config = require("./config/config")
const express = require("express");
const bodyParser = require("body-parser")
const httpProxy = require("express-http-proxy")




const path = require("path");

const app = express();

const port = process.env.PORT || "3000";


app.use((req, resp, next) => {



  resp.setHeader("Access-Control-Allow-Origin", "*");




  resp.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");

  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS,PUT")
  next();
})



const authProxy = httpProxy(process.env.AUTH_SERVICE);

const tradeProxy = httpProxy(process.env.TRADE_SERVICE);

const notifyProxy = httpProxy(process.env.NOTIFY_SERVICE);

const marketDataProxy = httpProxy(process.env.MARKETDATA_SERVICE);


app.all(["/api/:service", "/api/:service/**"], (req, resp, next) => {


  if (req.params.service.indexOf("trades") >= 0) {
    tradeProxy(req, resp, next)

  }
  else if (req.params.service.indexOf("user") >= 0) {
    authProxy(req, resp, next);
  }
  else if (req.params.service.indexOf("market") >= 0) {
    marketDataProxy(req, resp, next);
  }

})


app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
})









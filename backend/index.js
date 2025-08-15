const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require('./Model/HoldingsModel');
const { PositionsModel } = require("./Model/PositionsModel");
const { OrdersModel } = require("./Model/OrdersModel");
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();



app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});-




app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});





  app.listen(PORT, () => {
    console.log("app started");
    mongoose.connect(uri);
  console.log("MongoDB connected");
  });

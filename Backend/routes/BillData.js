const express = require('express');
const Router = express.Router();
const Bill = require('../schemas/Bill');

Router.post("/Add", async (req, res) => {
  const { customerid,totel } = req.body;
  console.log(req.body)
  const Bills = await Bill.create({
    customerid:customerid,
    totel:totel
  });
  res.json(Bills);
});



module.exports = Router;
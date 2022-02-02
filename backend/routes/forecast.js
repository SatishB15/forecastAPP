const express = require('express');
const router=express.Router();
const jsonForecastData = require('../data/data');

router.get("/forecast", (req, res) => 
{
    res.json(jsonForecastData);
});

module.exports=router;
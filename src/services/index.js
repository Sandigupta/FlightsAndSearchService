const express = require("express");
const app = express();
app.use(express.json());

module.exports = {
    CityService: require('./city-service')
}
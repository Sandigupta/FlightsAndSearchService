const express = require("express");
const CrudService = require("./crud-service");
const app = express();
app.use(express.json());

module.exports = {
    CityService: require('./city-service'),
    AirportService: require('./airport-service'),
    FlightService: require('./flight-service'),
    CrudService: require('./crud-service')
}
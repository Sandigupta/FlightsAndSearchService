const express = require("express");
const CrudRepository = require("./crud-repository");
const app = express();
app.use(express.json());
// here we export all the repositoryes present in the repository file to make the import of these cleaner
module.exports = {
    CityRepository: require('./city-repository'),
    AirportRepository:require('./airport-repository'),
    AirplaneRepository: require('./airplane-repository'),
    FlightRepository: require('./flight-repository'),
    CrudRepository: require('./crud-repository')
}
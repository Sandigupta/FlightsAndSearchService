const AirportRepository = require("./airport-repository");
const CityRepository = require("./city-repository");

// here we export all the repositoryes present in the repository file to make the import of these cleaner
module.exports = {
    CityRepository: require('./city-repository'),
    AirportRepository:require('./airport-repository')
}
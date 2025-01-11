const { Flights } = require('../models/index');
const { Op } = require('sequelize');


class FlightRepository{

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository layer");
            throw error;
        } 
    }

    // async getFlight(flightId) {
    //     try {
    //         const flight = await Flights.findByPk(flightId);
    //         return flight;
    //     } catch (error) {
    //         console.log("Something went wrong in the flight repository layer");
    //         throw error;
    //     }
    // }

    // async getAllFlights(filter) {
    //     try {
            
    //     } catch (error) {
            
    //     }
    // }
     
}

module.exports = FlightRepository;
const { Op } = require('sequelize');
const { Airport } = require('../models/index');

class AirportRepository{
    async createAirport(data) {
        try {
            const airport = await Airport.create({
               name: data.name,
                address: data.address,
                cityId:data.cityId
            });
            return airport;
        } catch(error) {
            console.log("Something went wrong at repository level in airport")
            throw error;
        } 
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destroy({
                where: {
                      id:airportId
                  }
            });
        } catch (error) {
            console.log("Something went wrong at repository level in airport");
            throw error;
        }
    }

    async updateAirport(airportId, data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong at repository level in airport");
            throw error;
        }
    }

    async getAirport(airportId) {
        try {
            const Airport = await Airport.findByPk(airportId);
            return Airport;
        } catch (error) {
            console.log("Something went wrong at repository level in airport");
            throw error;
        }
    }

}

module.exports = AirportRepository;
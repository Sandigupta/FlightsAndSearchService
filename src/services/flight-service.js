const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try { 
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival time can not be less than departure time' }
            }

            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            
            // console.log(airplane);
            if (!airplane) {
                throw new Error('Airplane not found');
            }
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }


}

module.exports = FlightService;

/**
 * {
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats->airplane 
 * }
 */
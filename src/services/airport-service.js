const { AirportRepository } = require('../repository/index');
const CrudService = require('./crud-service');


class AirportService extends CrudService{
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
    
}
module.exports = AirportService;










// Home work done by me with use crud extends
// class AirportService{
//       constructor(){
//           this.airportRepository = new AirportRepository;
//     }
    
//     async createAirport(data) {
//         try {
//             const airport = await this.airportRepository.createAirport(data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong at airport service level");
//             throw error;
//         }
        
//     }

//     async deleteAirport(airportId) {
//         try {
//             await this.airportRepository.deleteAirport(airportId);
//         } catch (error) {
//             console.log("Something went wrong at airport service level");
//             throw error;
//         }
//     }

//     async updateAirport(airportId,data) {
//         try {
//             await this.airportRepository.updateAirport(airportId, data); 
//         } catch (error) {
//             console.log("Something went wrong at airport service level");
//             throw error;
//           }
//     }

//     async getAirport(airportId) {
//         try {
//             await this.airportRepository.getAirport(airportId);
//         } catch (error) {
//             console.log("Something went wrong at service airport level");
//             throw error;
//         }
//     }

// }


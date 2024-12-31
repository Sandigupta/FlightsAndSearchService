const { CityRepository } = require('../repository/index')
    |
class CityService{
    // we not need constructor in javascript but we can do it by using constructor.
    // we can use only "CityRepository" on the place of "this.CityRepository" as like how we written in the city-repository.js.
    constructor() {
        this.CityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error}
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.CityRepository.deleteCity(cityId); 
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
    
    async updateCity(cityId, data) {
        try {
            const city = await this.CityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Someething went wrong at service layer");
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            const cities = await this.CityRepository.getAllCities({ name: filter.name });
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw { error };
        }
    }
}

module.exports = CityService;    
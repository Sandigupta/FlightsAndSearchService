const { where } = require("sequelize");

class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
         try {
             const result = await this.model.create(data);
             return result;
         } catch (error) {
             console.log("Something went wrong in crus repo");
             throw error;
         }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
        } catch (error) {
            console.log("Something went wrong in crud repo");
        }
    }

    async get(modelId) {
        try {
            const responce = await this.model.findByPk(modelId);
            return responce;  
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
        
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
        }
    }
   
    async update(modelId,data) {
          try {
              const result = await this.model.update(data, {
                  where: {
                      id: modelId
                  },
              });
              return result
          } catch (error) {
              console.log("Something went wrong in ccrud repo");
              throw error;
          }
    }

}

module.exports = CrudRepository;
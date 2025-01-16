class CrudService{
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const responce = await this.repository.create(data);
            return responce;
        } catch (error) {
            console.log("Something went wrong in crud service level");
            throw error;
        }
    }

    async destroy(id) {
        try {
            const responce = await this.repository.destroy(id);
            return responce;
        } catch (error) {
            console.log('Something went wrong in crud repository level');
            throw error;
        }
    }

    async get(id) {
         try {
             const responce = await this.repository.get(id);
             return responce;
         }catch (error) {
             console.log("Something went at crud service level");
             throw error;
        }
    }

    async getALL() {
         try {
             const responce = await this.repository.getALL();
             return responce;
         } catch (error) {
             console.log("Something went wrong at crud service level");
             throw error;
         }
    }

    async update(id,data) {
         try {
             const responce = await this.repository.updata(id, data);
             return responce;
         } catch (error) {
             console.log("Something went wong in crud service level");
             throw error;
         }
    }
}

module.exports = CrudService;
const {City} = require('../models/index');

class CityRepository{
    //for inserting a row in City
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    //for deleting a row based CityId 
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try {
            //the below approach also works but it will not return the updated object
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     },
            //     returning:true
            // });

            //for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
    }

    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
        }
        
    }

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        }catch (error) {
            console.log("something went wrong in the repository layer");
            throw{error};
    }
}
}

module.exports = CityRepository;

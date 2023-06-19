const {Flight} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{
    //this is a private function
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice){
        //     Object.assign(filter,{price :{[Op.gte]:data.minPrice}});
        // }
        // if(data.maxPrice){
        //     Object.assign(filter,{price :{[Op.lte]:data.maxPrice}});
        // }
        //Object.assign(filter,{[Op.and]:[{price :{[Op.gte]:data.minPrice}},{price :{[Op.lte]:data.maxPrice}}]});
        //Object.assign(filter, {price:{[Op.between]:[data.minPrice,data.maxPrice]}});
        let priceFilter = [];
        if(data.minPrice){
            priceFilter.push({price :{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price :{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
            
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }

    }

    //to get a specific flight using flightId , this will be used when we want boarding pass for users
    async getFlight(flightId){
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where : filterObject
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error};
        }
    }

}
module.exports = FlightRepository;

/*
where:{
    arrivalAirportId:2,
    departureAirportId:4,
    price:{[Op.gte]:4000}

}
*/
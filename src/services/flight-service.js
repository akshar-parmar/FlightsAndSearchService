const {FlightRepository,AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService {
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight =  await this.flightrepository.createFlight({
                ...data,totalSeats:airplane.capacity  //adding property totalSeats to data uisng spread operator
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
    async getAllFlightData(data){
        try {
            const flights = await this.flightrepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
        
    }
}


/*
    {
        flightNumber,
        airplaneId,
        departureAirportId,
        arrivalAirportId,
        arrivalTime,
        departureTime,
        price,
        totalSeats ->you have to fetch from airplane only using airplane id


    }
*/
module.exports = FlightService;
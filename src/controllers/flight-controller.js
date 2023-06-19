const {FlightService} = require('../services/index.js');
const flightservice = new FlightService();
const {SuccessCodes} = require('../utils/error-codes');
//POST request ->/flights
const create = async (req,res)=>{
    try {
        const flightRequestData = {
            flightNumber:req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime :req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price
        }
        const flight = await flightservice.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success:true,
            err:{},
            message:"Successfully created a flight"
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a flight',
            err:error
    })
    }

}

//GET request->/flights
const getAll = async(req,res)=>{
    try {
        const response = await flightservice.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: response,
            success:true,
            err:{},
            message:"Successfully fetched the flights"
        })
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to fetch the flights',
            err:error
    })
}
}

module.exports={
    create,
    getAll
}
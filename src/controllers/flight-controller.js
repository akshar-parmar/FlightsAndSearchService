const {FlightService} = require('../services/index.js');
const flightservice = new FlightService();

//POST request ->/flights
const create = async (req,res)=>{
    try {
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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
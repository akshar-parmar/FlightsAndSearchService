const {FlightService} = require('../services/index.js');
const flightservice = new FlightService();

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
module.exports={
    create,
}
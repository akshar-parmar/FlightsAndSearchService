const {AirportService} = require('../services/index');
const airportservice = new AirportService();

const create = async(req,res)=>{
    try {
        const response = await airportservice.create(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message:"Successfully created a airport",
            err:{}

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a aiport',
            err:error
        });
    }
}
module.exports={
    create,
}
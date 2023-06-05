const {CityService} = require('../services/index');
//create a global CityService object
const cityService = new CityService();

/*
POST
data ->req.body
*/
const create = async(req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        });
    }
}

//DELETE request ->/city/:id
const destroy = async(req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully deleted a city",
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the city',
            err:error
        });
    }
    
}

//GET request->/city/:id
const get = async(req,res)=>{
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully fetched city",
            err:{}
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the city',
            err:error
        });
    }
    
}

//PATCH request ->/city/:id ->req.body
const update = async(req,res)=>{
    try{
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"Successfully updated city",
            err:{}
        })
    } 
    catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the city',
            err:error
        });
    }
    
}

module.exports={
    create,
    update,
    destroy,
    get

}
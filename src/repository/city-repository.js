const {City} = require('../models/index');

async function CreateCity({name}){
    try {
        const city = await City.create({name});
        return city;
    } catch (error) {
        throw {error};
    }
}

async function DeleteCity(CityId){
    try{
        const deletedrows = await City.destroy({
            where:{
                id:CityId
            }
        });
        if(deletedrows==0){
            console.log(`there is no matching record with id ${CityId}`);
        }
    }catch(error){
        throw{error};
    }
}
//const create_demo = CreateCity({name:"Delhi"});
//DeleteCity(3);


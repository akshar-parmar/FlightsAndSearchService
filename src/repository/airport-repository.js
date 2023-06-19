const CrudRepository = require('./crud-repository');
const {Airport} = require('../models/index');
class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport); //this will invoke the parent constructor i.e constructor of CrudRepository
    }
}
module.exports = AirportRepository;
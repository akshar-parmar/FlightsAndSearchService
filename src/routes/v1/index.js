const express = require('express');
const CityController = require('../../controllers/city-controller');
const router = express.Router();
const FlightController = require('../../controllers/flight-controller');
const AirportController  = require('../../controllers/airport-controller');

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);

//to fetch all the city
router.get('/city', CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post('/flights',FlightController.create);
router.get('/flights',FlightController.getAll);

router.post('/airports',AirportController.create);

module.exports = router;
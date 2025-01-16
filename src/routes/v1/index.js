const express = require('express');
const CityControlle = require('../../controllers/city-controllers');
const AirportControlle = require('../../controllers/airport-controllers');
const FlightControlle = require('../../controllers/flight-controllers');
const router = express.Router();
const  {FlightMiddleware} = require('../../middlewares/index');

router.post('/city', CityControlle.create);
router.delete('/city/:id', CityControlle.destroy);
router.get('/city/:id', CityControlle.get);
router.get('/city', CityControlle.getAll);
router.patch('/city/:id', CityControlle.update);

router.post('/airport', AirportControlle.create);

router.post('/flights',FlightMiddleware.validateCreateFlight, FlightControlle.create);
router.get('/flights', FlightControlle.getAll);


module.exports = router;
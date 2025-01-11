const express = require('express');
const CityControlle = require('../../controllers/city-controllers');
const AirportControlle = require('../../controllers/airport-controllers');
const FlightControlle = require('../../controllers/flight-controllers');
const router = express.Router();


router.post('/city', CityControlle.create);
router.delete('/city/:id', CityControlle.destroy);
router.get('/city/:id', CityControlle.get);
router.get('/city', CityControlle.getAll);
router.patch('/city/:id', CityControlle.update);

router.post('/airport', AirportControlle.create);

router.post('/flights', FlightControlle.create);


module.exports = router;
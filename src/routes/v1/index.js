const express = require('express');
const CityControlle = require('../../controllers/city-controllers');
const router = express.Router();


router.post('/city', CityControlle.create);

module.exports = router;
const express = require("express");
const { PORT } = require('./config/serverConfig');
const bodyParser = require("body-parser");
const CityRepository=require('./repository/city-repository')
const Apiroutes = require('./routes/index');

const setupAndStartServer = async () => {
    // create the express object
    const app = express();
   

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
     
    app.use('/api', Apiroutes);
    app.listen(PORT, () => {
        console.log(`Server stsrted st ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({ name: "New Delhi" });
        // repo.deleteCity(1)
    })
}

setupAndStartServer();
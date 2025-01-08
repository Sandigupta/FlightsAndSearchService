const express = require("express");
const app = express();
const { PORT } = require('./config/serverConfig');
const bodyParser = require("body-parser");
const CityRepository=require('./repository/city-repository')
const Apiroutes = require('./routes/index');

const db=require('./models/index')
const setupAndStartServer = async () => {
    // create the express object
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
     
    app.use('/api', Apiroutes);
    app.listen(PORT, () => {
        console.log(`Server stsrted st ${PORT}`);
        
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true });
        }
    });
}

setupAndStartServer();
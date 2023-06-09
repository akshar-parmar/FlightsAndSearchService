const express = require("express");
const bodyParser = require("body-parser");
const {PORT} = require('./config/serverConfig.js');
const ApiRoutes = require('./routes/index');
const {Airplane} = require('./models/index.js');
const SetupAndStartServer = async()=>{
    
    //create the express object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

    // await Airplane.create({
    //         modelNumber:'Bombardier CRJ'
    // })
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`); //string interpolation
    })
}
SetupAndStartServer();

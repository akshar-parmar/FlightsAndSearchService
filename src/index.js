const express = require("express");
const {PORT} = require('./config/serverConfig.js');
const SetupAndStartServer = async()=>{
    const app = express();
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`); //string interpolation
    })
}
SetupAndStartServer();

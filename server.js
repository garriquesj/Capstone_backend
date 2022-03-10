require('dotenv').config();
    //set up port,express create , application
const mongoose =require ("mongoose");
const  PORT = 9000;


    //import middlware
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require("morgan");


    //middleware
 app.use(cors()); // to prevent cors errors, open access to all origins
 app.use(morgan("dev")); // logging
 app.use(express.json()); // parse json bodieswill not need

    //routes
app.get("/",(req,res) => { 
    res.send('hello world');
});
    //index
    //create
    //show
    //detail
    //istener
app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));
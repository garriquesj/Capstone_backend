//_________dependcies______
require('dotenv').config();
//_________set up port,express create , application
const PORT = process.env.PORT || 9000;
const express = require('express');
const app = express();
//____imports____
const mongoose = require('mongoose')
// ____import middlware____
const cors = require("cors");
const morgan = require("morgan");

// ____Establish Connection____

//____middleware____
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodieswill not need

// ___Connection Events___
mongoose.connection
    .on("open", () => console.log("Your are CONNECTED to mongoose"))
    .on("close", () => console.log("Your are DISCONNECTED from mongoose"))
    .on("error", (error) => console.log('error WITH DB CONNECTION'));

//_________routes_________
app.get("/",(req,res) => { 
    res.send('hello world');
});
//_____index____
//_____create_____
//_____show
//_____detail
//_____listener_____
app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));

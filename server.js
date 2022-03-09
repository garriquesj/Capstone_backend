//_________dependcies______
require('dotenv').config();
//_________set up port,express create , application
const { PORT = 9000, MONGODB_URL } = process.env;
const express = require('express');
const app = express();
//____imports____
const mongoose = require('mongoose');

//____import middlware____
const cors = require("cors");
const morgan = require("morgan");

//____Establish Connection____
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
},() => {
    console.log('Connected to MongoDB');
    }
);
//____Connection Events____
mongoose.connection
    .on("connected", () => console.log(`[${new Date().toLocaleTimeString()}]-Your are CONNECTED to mongoose`))
    .on("disconnected", () => console.log("Your are DISCONNECTED from mongoose  ⚡️ 🔌 ⚡️"))
    .on("error", (error) => console.log(error,'ERROR WITH mongDB CONNECTION'));

//____middleware____
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodieswill not need



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

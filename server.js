//_________dependcies______
require('dotenv').config();
//_________set up port,express create , application
const { PORT = 9000, MONGODB_URL } = process.env;
const express = require('express');
const app = express();
//____imports____
const mongoose = require('mongoose')

// ____Establish Connection____
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
//____middleware____
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

// ___Connection Events___
mongoose.connection
    .on("open", () => console.log("Your are CONNECTED to mongoose"))
    .on("close", () => console.log("Your are DISCONNECTED from mongoose"))
    .on("error", (error) => console.log('error WITH DB CONNECTION'));

//_________routes_________
app.get("/",(req,res) => { 
    res.send('hello world');
});
//_____listener_____
app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));

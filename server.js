require('dotenv').config   
    //set up port,express create , application
const  { PORT= 9000} = process.env;
// import dependices
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


// create Express app
const app = express()
// database
const db = require("./models");
db.sequelize.sync().then(() => {//wth is this thing
    
    console.log("DB connected");
});

let corsOptions = {
    origin: "http://localhost:3000"
};
    //middleware
app.use(cors(corsOptions));
app.use(express.json()); // to prevent cors errors, open access to all origins
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev")); // logging

app.use(bodyParser.json());
require("./routes/projectRoutes")(app);
require("./routes/userRoutes")(app);


app.get("/",(req,res) => { 
    res.send('hello world');
});


app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));
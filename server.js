    //set up port,express create , application
const  PORT = process.env.PORT || 9000;
// import dependices
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const { Sequelize } = require('@sequelize/core');
// const sequelize = new Sequelize('arcsource', 'jay', 'jay', {
//     host: 'localhost',
//     dialect:'postgres'
// });
// create Express app
const app = express()
// database
const db = require("./models");
db.sequelize.sync().then(() => {//wth is this thing
    
    console.log("DB connected");
});

var corsOptions = {
    origin: "http://localhost:9001"
};
    //middleware
app.use(cors(corsOptions));
app.use(express.json()); // to prevent cors errors, open access to all origins
// app.use(morgan("dev")); // logging

app.use(bodyParser.json());
require("./routes/projectRoutes")(app);
require("./routes/userRoutes")(app);

//     //routes
// app.get("/",(req,res) => { 
//     res.send('hello world');
// });

app.use(bodyParser.urlencoded({ extended: true }));

    //show
    //detail
    //istener
app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));
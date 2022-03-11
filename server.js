    //set up port,express create , application
const  PORT = 9000;
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


    //middleware
app.use(cors());
app.use(express.json()); // to prevent cors errors, open access to all origins
// app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use(bodyParser.json());

    //routes
app.get("/",(req,res) => { 
    res.send('hello world');
});

    //index
app.get("/projects",async (req,res) => {
    try{
        res.json(await Projects.find({}));
    } catch (error) {}//place404 here
});
    //create
app.post("/users", async (req, res)=> {
    try {
        console.log(req.body)
    } catch (error) {
        console.error(err.message);
    }
});
    //show
    //detail
    //istener
app.listen(PORT, () => console.log(`ITS OVER ${PORT}!!!`));

    //set up port,express create , application
const  PORT = 9000;
    //import middlware
const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const pool =require("./db.js")//query postgress

    //middleware
app.use(cors());
app.use(express.json()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

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
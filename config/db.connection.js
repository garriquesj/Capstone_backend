const mongoose = require('mongoose');
require('dotenv').config();

const connectionStr = process.env.MONGO_URI;
mongoose.connect(connectionStr)

mongoose.connection
    .on("open", () => console.log(`[${new Date().toLocaleTimeString()}]-Your are CONNECTED to mongoose`))
    .on("close", () => console.log("Your are DISCONNECTED from mongoose  ⚡️ 🔌 ⚡️"))
    .on("error", (error) => console.log('error WITH mongDB CONNECTION'));

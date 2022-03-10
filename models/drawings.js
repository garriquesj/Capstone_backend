const mongoose = require("mongoose");
const drawingSchema =new mongoose.Schema({
project: { type:String, 
        required: [true, "please choose a user name"]
        },//set minimum name length later
img :{type:String,
        required: [true, 'please enter URL'],
        },
location: { type: String,
                enum: {
                values: ['', 'Conceptual'],
                message: 'enter location'
                }
        }        
});

const Drawing = mongoose.model('Drawing', drawingSchema);
module.exports = Drawing;
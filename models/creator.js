const { Agent } = require("http");
const mongoose = require("mongoose");
const creatorSchema =new mongoose.Schema({
    name: { type:String, 
            required: [true, "please choose a user name"]
            },//set minimum name length later
    age: { type: Number,
            required: [true, "please enter your age"],
            min: [18, 'must be 18 or older to join'],
            },
    email :{type:String,
            required: [true, 'please enter email address'],
            },
    usertype: { type: String,
                enum: {
                values: ['Freelancer', 'Exhibitionist'],
                message: '{VALUE} is not supported'
            }
        }        
});

const Creator = mongoose.model('Creator', creatorSchema);
module.exports = Creator;
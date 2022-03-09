const mongoose = require("mongoose");
const archModelSchema =new mongoose.Schema({
    project: { type: String, 
            required: [true, "please choose a user name"]
            },//set minimum name length later
    img: { type: [String],
            required: [true, "please enter URL"],
            },
    material: { type: String,
            required: [true, 'please describe model material'],
            }
    
});

const ArchModel = mongoose.model('ArchModel', archModelSchema);
module.exports = ArchModel;
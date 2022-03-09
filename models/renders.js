const mongoose = require("mongoose");
const renderSchema =new mongoose.Schema({
    project: { type: String, 
            required: [true, "please state project name"]
            },//set minimum name length later
    img: { type: [String],
            required: [true, "please enter URL"],
            },
    creator: { type: String,
            required: [true, 'please state creator'],
            },
    discription: { type: String,
            required: [true, 'please describe model material'],
            }
    
});

const RenderSchema = mongoose.model('RenderSchema', renderSchema);
module.exports = RenderSchema;
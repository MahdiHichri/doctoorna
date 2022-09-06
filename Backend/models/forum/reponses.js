const { default: mongoose } = require("mongoose");

const responseSchema = mongoose.Schema(
    {
        
        description: {type: String, required: true},
        dateCreation: {type: Date, required: false, default: Date.now},
        idDoctor: {type: String, required: true,default: "anonymous"},
        idPharmacion: {type: String, required: true, default: "anonymous"},     
        idPost: {type: String, required: true, ref: "posts"},     
    }
)

module.exports = mongoose.model("responses",responseSchema)
const { default: mongoose } = require("mongoose");

const postSchema = mongoose.Schema(
    {
        _id: {type: String, required: true},
        description: {type: String, required: true},
        photo: {type: String, required: false},
        dateCreation: {type: Date, required: false, default: Date.now},
        idPatient: {type: String, required: true},    
        idTopic: {type: String, required: true , ref: 'topics'}, 
        Response: {type: Number, required: true, default: 0}, 
    }
)

module.exports = mongoose.model("posts",postSchema)
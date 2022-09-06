const { default: mongoose } = require("mongoose");


const phamarcistSchema = mongoose.Schema(
    {
        lastName: {type: String, required: true},
        firstName: {type: String, required: true},
        civility: {type: String, required: true},
        dateOfBirth: {type: Date, required: true},
        phoneNumber: {type: Number, required: true},
        stateOfResidence: {type: String, required: true},
        presentation: {type: String, required: true},
        availabilitySchedule: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String , required: true},
    }
)

module.exports = mongoose.model("phamarcist",phamarcistSchema)
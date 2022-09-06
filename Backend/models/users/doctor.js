const { default: mongoose } = require("mongoose");

const doctorSchema = mongoose.Schema(
    {
        _id: {type: String, required: true},
        lastName: {type: String, required: true},
        firstName: {type: String, required: true},
        civility: {type: String, required: true},
        dateOfBirth: {type: Date, required: false},
        phoneNumber: {type: Number, required: true},
        stateOfResidence: {type: String, required: false},
        areaOfPractice: {type: String, required: true},
        speciality: {type: String, required: true},
        presentation: {type: String, required: false},
        availabilitySchedule: {type: String, required: false},
        cnomCode: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String , required: true},
    }
)

module.exports = mongoose.model("doctor",doctorSchema)
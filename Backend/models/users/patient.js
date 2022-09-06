const { default: mongoose } = require("mongoose");

const patientSchema = mongoose.Schema(
    {
        lastName: {type: String, required: true},
        firstName: {type: String, required: true},
        userName: {type: String, required: true},
        civility: {type: String, required: true},
        dateOfBirth: {type: Date , required: true , default: Date.now},
        phoneNumber: {type: Number, required: true},
        email: {type: String, required: true},
        password: {type: String , required: true},
    }
)

module.exports = mongoose.model('patient',patientSchema)
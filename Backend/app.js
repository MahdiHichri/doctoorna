const express = require("express")
const { default: mongoose, mongo } = require("mongoose")
const app = express()
require('dotenv/config')




const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())




const patientRoute = require("./routes/users/Patient")

const doctorRoute = require("./routes/users/doctor")

const pharmacistRoute = require("./routes/users/pharmacist")

const postRoute = require("./routes/forum/posts")

const responseRoute = require("./routes/forum/reponses")

const topicRoute = require("./routes/forum/topics")

app.use("/patient",patientRoute)

app.use("/doctor",doctorRoute)

app.use("/pharmacist",pharmacistRoute)

app.use("/post",postRoute)

app.use("/response",responseRoute)

app.use("/topic",topicRoute)



mongoose.connect(process.env.DB_CONNECTION,(err)=>
{
    err ? console.log("not Connected ERROR : "+err) : console.log('Connected');
})



app.listen(3002)
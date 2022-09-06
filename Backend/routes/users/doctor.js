const express = require("express")
const doctor = require("../../models/users/doctor")
const doctorSchema = require("../../models/users/doctor")
const router = express.Router()



router.get("/",(req,res)=>
{
  doctorSchema.find().then(data => 
    {
        res.json({response:"success",data:data})
    })
    .catch(err => {

        res.json({response:"echec",data:err})
    })
}
)

router.get("/:doctorId",(req,res)=>
{
    doctor.find({_id:req.params.doctorId}).then(data => 
        {
            res.json({response:"success",data:data})

          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.post("/Auth",(req,res)=>
{
    doctor.find({_id:req.body.username,password:req.body.password}).then(data => 
        {
            res.json({response:"success",data:data})

          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})


router.post("/create",(req,res) =>
{
    const doctor = new doctorSchema(
        {
            _id: req.body.username,
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            userName: req.body.userName,
            civility: req.body.civility,
            dateOfBirth: req.body.dateOfBirth, 
            phoneNumber: req.body.phoneNumber,
            stateOfResidence: req.body.stateOfResidence,
            areaOfPractice: req.body.areaOfPractice,
            speciality: req.body.speciality,
            presentation: req.body.presentation,
            availabilitySchedule: req.body.availabilitySchedule,         
            cnomCode: req.body.cnomCode,  
            email: req.body.email,
            password: req.body.password,
        }
        )
        
        doctor.save().then((data)=>
        {
            console.log("doctor : "+data);
            res.json({response:"success",data:data})
        })
        .catch(err => {console.log("doctor err :"+err); res.json({response:"echec",data:err})})
    })
    
router.post("/SignIn",(req,res) =>
{
    doctorSchema.find({email:req.body.email,password:req.body.password}).then(data =>
        {
            console.log("data .length = "+data.length);
            if(data.length>0)
            res.json({response:"success",data:data})
            else
            res.json({response:"echec",data:data})
        })
})
    
router.delete("/delete/:doctorId",(req,res)=>
{
    doctor.remove({_id:req.params.doctorId}).then(data => 
        {
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.patch("/update/:doctorId",(req,res)=>
{
    doctor.updateOne({_id:req.params.doctorId},{$set: 
    {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        userName: req.body.userName,
        civility: req.body.civility,
        phoneNumber: req.body.phoneNumber,
        areaOfPractice: req.body.areaOfPractice,
        speciality: req.body.speciality,       
        cnomCode: req.body.cnomCode,  
        email: req.body.email,
        password: req.body.password,
    }}).then(data => 
        {
            data.modifiedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})



module.exports = router;
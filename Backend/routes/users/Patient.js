const express = require("express")


const router = express.Router()
const Patient = require("../../models/users/patient")



router.get("/",(req,res)=>
{
    Patient.find().then(data => 
        {
            res.json({response:"success",data:data})
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
    })

router.get("/:patientId",(req,res)=>
{
    Patient.findById(req.params.patientId).then(data => 
        {
            !data.equals([]) ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
          
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
    })

router.post("/SignUp",(req,res) =>
{
    const patient = new Patient(
        {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            userName: req.body.userName,
            civility: req.body.civility,
            dateOfBirth: req.body.dateOfBirth, 
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: req.body.password,
        }
        )
        
        patient.save().then((data)=>
        {
            console.log("patient : "+data);
            res.json({response:"success",data:data})
        })
        .catch(err => {console.log("patient err :"+err); res.json({response:err,data:data})})
})

router.post("/SignIn",(req,res) =>
{
    Patient.find({email:req.body.email,password:req.body.password}).then(data =>
        {
            console.log("data .length = "+data.length);
            if(data.length>0)
            res.json({response:"success",data:data})
            else
            res.json({response:"echec",data:data})
        })
})

router.delete("/delete/:patientId",(req,res)=>
{
    Patient.remove({_id:req.params.patientId}).then(data => 
        {
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
})

router.patch("/update/:patientId",(req,res)=>
{
    Patient.updateOne({_id:req.params.patientId},{ $set: 
    {
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        userName: req.body.userName,
        civility: req.body.civility,
        dateOfBirth: req.body.dateOfBirth, 
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password,
    }
    }).then(data => 
        {
            data.modifiedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
})



module.exports = router;
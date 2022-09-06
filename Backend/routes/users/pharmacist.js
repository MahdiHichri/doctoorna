const express = require("express")
const { default: mongoose } = require("mongoose")
const pharmacistSchema = require("../../models/users/phamarcist")
const router = express.Router()

router.get("/",(req,res)=>
{
    pharmacistSchema.find().then(data => 
        {
            res.json({response:"success",data:data})
        })
        .catch(err =>
            {
                res.json({response:err,data:data})
            })
}
)

router.get("/:pharmacistId",(req,res)=>
{
    pharmacistSchema.findById(req.params.pharmacistId).then(data => 
        {
            !data.equals([]) ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})

          
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
})

router.post("SignUp",(req,res) => 
{
    const pharmacist = new pharmacistSchema(
        {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            civility: req.body.civility,
            dateOfBirth: req.body.dateOfBirth, 
            phoneNumber: req.body.phoneNumber,
            stateOfResidence: req.body.stateOfResidence,
            presentation: req.body.presentation,
            availabilitySchedule: req.body.availabilitySchedule,         
            email: req.body.email,
            password: req.body.password, 
        }
    )
    pharmacist.save().then((data)=>
    {
        console.log("pharmacist : "+data);
        res.json({response:"success",data:data})
    })
    .catch(err => {console.log("pharmacist err :"+err); res.json({response:err,data:data})})

})

router.post("/SignIn",(req,res) =>
{
    pharmacistSchema.find({email:req.body.email,password:req.body.password}).then(data =>
        {
            console.log("data .length = "+data.length);
            if(data.length>0)
            res.json({response:"success",data:data})
            else
            res.json({response:"echec",data:data})
        })
})

router.patch("/update/:pharmacistId",(req,res)=>
{
    pharmacistSchema.updateOne({_id:req.params.pharmacistId},{$set: 
    {
            lastName: req.body.lastName,
            firstName: req.body.firstName,
            civility: req.body.civility,
            dateOfBirth: req.body.dateOfBirth, 
            phoneNumber: req.body.phoneNumber,
            stateOfResidence: req.body.stateOfResidence,
            presentation: req.body.presentation,
            availabilitySchedule: req.body.availabilitySchedule,         
            email: req.body.email,
            password: req.body.password,
    }}).then(data => 
        {
            data.modifiedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
})

router.delete("/delete/:pharmacistId",(req,res)=>
{
    pharmacistSchema.remove({_id:req.params.pharmacistId}).then(data => 
        {
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:err,data:data})
        })
})

module.exports = router;
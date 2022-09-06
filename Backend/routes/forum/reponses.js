const express = require("express")
const Response = require("../../models/forum/reponses")
const router = express.Router()



router.get("/",(req,res)=>
{
    Response.find().then(data => 
    {
        res.json({response:"success",data:data})
    })
    .catch(err => {

        res.json({response:"echec",data:err})
    })
}
)

router.get("/:idPost",(req,res)=>
{
    Response.find({idPost:req.params.idPost}).then(data => 
        {
            
            res.json({response:"success",data:data})

          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.get("/post/:idPost",(req,res)=>
{
    Response.find({idPost:req.params.idPost}).then(data => 
        {
            
            res.json({response:"success",data:data.length})

          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.post("/Create",(req,res) =>
{
    const response = new Response(
        {
            description: req.body.description,
            dateCreation: req.body.dateCreation,
            idDoctor: req.body.idDoctor, 
            idPharmacion: req.body.idPharmacion,
            idPost: req.body.idPost,
        }
        )
        
        response.save().then((data)=>
        {
            console.log("response : "+data);
            res.json({response:"success",data:data})
        })
        .catch(err => {console.log("response err :"+err); res.json({response:"echec",data:err})})
    })
    
router.delete("/delete/:responseId",(req,res)=>
{
    Response.remove({_id:req.params.responseId}).then(data => 
        {
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.patch("/update/:responseId",(req,res)=>
{
    Response.updateOne({_id:req.params.responseId},{$set: 
    {
            description: req.body.description,
            dateCreation: req.body.dateCreation,
            idDoctor: req.body.idDoctor, 
            idPharmacion: req.body.idPharmacion,
            idPost: req.body.idPost,
    }
    }).then(data => 
        {
            data.modifiedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})



module.exports = router;
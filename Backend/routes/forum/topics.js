const express = require("express")
const Topic = require("../../models/forum/topics")
const router = express.Router()



router.get("/",(req,res)=>
{
    Topic.find().then(data => 
    {
        res.json({response:"success",data:data})
    })
    .catch(err => {

        res.json({response:"echec",data:err})
    })
}
)

router.get("/:topicId",(req,res)=>
{
    Topic.findById(req.params.topicId).then(data => 
        {
            !data.equals([]) ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})


router.post("/Create",(req,res) =>
{
    const topic = new Topic(
        {
            _id: req.body.description,
            dateCreation: req.body.dateCreation,
            createdBy: req.body.createdBy,
            posts: req.body.posts,
        }
        )
        
        topic.save().then((data)=>
        {
            console.log("created");
            res.json({response:"success",data:data})
        })
        .catch(err => {console.log("topic err :"+err); res.json({response:"echec",data:err})})
    })
    
router.delete("/delete/:topicId",(req,res)=>
{
    Topic.remove({_id:req.params.topicId}).then(data => 
        {
            console.log("deleted");
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.patch("/update/:topicId",(req,res)=>
{
    Topic.updateOne({_id:req.params.topicId},{$set: 
    {
            _id: req.body.description,
            dateCreation: req.body.dateCreation,
            createdBy: req.body.createdBy,
            posts: req.body.posts,
    }
    }).then(data => 
        {
            console.log("updated");
            data.modifiedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
            
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})



module.exports = router;
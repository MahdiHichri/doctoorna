const express = require("express")
const Post = require("../../models/forum/posts")
const router = express.Router()



router.get("/",(req,res)=>
{
    Post.find().then(data => 
    {
        res.json({response:"success",data:data})
    })
    .catch(err => {

        res.json({response:"echec",data:err})
    })
}
)

router.get("/:postId",(req,res)=>
{
    Post.findById(req.params.postId).then(data => 
        {
            res.json({response:"success",data:data})

          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.get("/topic/:topicId",(req,res)=>
{
    Post.find({idTopic:req.params.topicId}).then(data => 
        {
            
            res.json({response:"success",data:data})
            
          
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.get("/CountTopic/:topicId",(req,res)=>
{
    Post.find({idTopic:req.params.topicId}).then(data => 
        {         
            res.json({response:"success",data:data.length})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})


router.post("/Create",(req,res) =>
{
    const post = new Post(
        {
            _id: req.body.nomPoste,
            description: req.body.description,
            photo: req.body.photo,
            dateCreation: req.body.dateCreation,
            idPatient: req.body.idPatient,
            idTopic: req.body.idTopic,
            response: req.body.response,
        }
        )
        
        post.save().then((data)=>
        {
            console.log("created");
            res.json({response:"success",data:data})
        })
        .catch(err => {console.log("post err :"+err); res.json({response:"echec",data:err})})
})
    
router.delete("/delete/:postId",(req,res)=>
{
    Post.remove({_id:req.params.postId}).then(data => 
        {
            console.log("deleted");
            data.deletedCount>0 ? res.json({response:"success",data:data}) : res.json({response:"echec",data:data})
        })
        .catch(err => {
            res.json({response:"echec",data:err})
        })
})

router.patch("/update/:postId",(req,res)=>
{
    Post.updateOne({_id:req.params.postId},{$set: 
    {
            _id: req.body.nomPoste,
            description: req.body.description,
            photo: req.body.photo,
            dateCreation: req.body.dateCreation,
            idPatient: req.body.idPatient,
            idTopic: req.body.idTopic,
            response: req.body.response,
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
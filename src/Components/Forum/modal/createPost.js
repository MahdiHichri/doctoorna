import axios from 'axios'
import React, { useState } from 'react'
import { TopicsModal } from '../Data/TopicsModal'
import "./createPost.css"

export default function CreatePost(props) {

    const [postData,setPostData]=useState
    (
        {
            "username":sessionStorage.getItem("usernamePatient")===null?"anonymous":sessionStorage.getItem("usernamePatient"),
            "topic":"",
            "posteTitle":"",
            "posteDescription":"",
        }
    )

    function getTopic(topic) 
    {
        setPostData({...postData,topic:topic})
    }

    function createPost()
    {
        axios.get("http://localhost:3002/topic/"+postData.topic)
        .then((res)=>
        {
            if(res.data.response==="echec") 
            {
                axios.post("http://localhost:3002/topic/create/",{"createdBy":postData.username,"description":postData.topic})
                .then(res => 
                    {
                        if(res.data.response==="success")
                        {
                            alert("topic inserted avec success");
                            axios.post("http://localhost:3002/post/create/",
                            {    
                            "nomPoste":postData.posteTitle,
                            "idTopic":postData.topic,
                            "description":postData.posteDescription,
                            "idPatient":postData.username
                            })
                        }
                        else
                        {
                            alert("echec d insertion");
                        }
                    })                 
            }
            else
            {

                            axios.post("http://localhost:3002/post/create/",
                            {    
                            "nomPoste":postData.posteTitle,
                            "idTopic":postData.topic,
                            "description":postData.posteDescription,
                            "idPatient":postData.username
                            })
                            .then(res => 
                                {
                                    if(res.data.response==="success")
                                    {
                                        alert("post inserted");
                                    }
                                    else
                                    {
                                        alert("post with this title already exist in this Topic");
                                        
                                    }
                                })
                        

                    
            }    
        })
    }

  return (
    <div className="modal fade" id="ModalCreatePost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Create Poste</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='createPost-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='createPost-content d-flex flex-column'>
                            <form className='w-100'>
                                <div className='d-flex justify-content-center'>
  
                                <div className='form-group'>
                                
                                    <label htmlFor='userName' className='form-label'>UserName: </label>
                                    <input type="text" className='form-control w-100' id='userName' value={postData.username} name="userName" required disabled/>
                                </div>
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='topic' className='form-label'>Topic: </label>
                                    <TopicsModal value={props.topic} getData={getTopic}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='posteTitle' className='form-label'>Poste Title: </label>
                                    <input type="text" required className='form-control' id='posteTitle' name="posteTitle" value={postData.posteTitle} onChange={(e)=>
                                    {
                                        setPostData({...postData,posteTitle:e.target.value})
                                    }}/>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='posteDescription' className='form-label'>Poste Description: </label>
                                    <textarea className='form-control' required id='posteDescription' name="posteDescription" value={postData.posteDescription} onChange={(e)=>
                                    {
                                        setPostData({...postData,posteDescription:e.target.value})
                                    }}/>
                                </div>
                            </form>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"
        id="liveToastBtn"
         onClick={
            ()=>
            {
                createPost()
                
            }}>
            Publier</button>
      </div>
    </div>
  </div>
</div>
  )
}

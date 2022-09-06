import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardResponse from './cardResponse/cardResponse'
import "./consulterPost.css"

export default function ConsulterPost(props) {

    const [response,setResponse]=useState("")
    

    


  return (
    <div className="modal fade" id="modalConsulterPost" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title w-100 text-center" id="staticBackdropLabel">{props.topic}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='consulterPost-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='consulterPost-content'>
                            <div className='container-fluid'>
                                <div className='row 'style={{marginBottom: "3vh",marginTop: "3vh"}}>
                                <div className="card text-center border-success">
  <div className="card-header ">
    <strong>{props.createdBy}</strong>
  </div>
  <div className="card-body">
    <h5 className="card-title  w-100 consulterCard-header"  style={{backgroundColor:"#f2f6e9",marginBottom: "3vh"}}>{props.postTitle}</h5>
    <p className="card-text consulterCard-title">{props.description}</p>
  </div>
  <div className="card-footer text-muted">
    {props.dateCreation}
  </div>
</div>
                                </div>
   
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='consulterPost-response'>
                            <div className='responsePost-title'>
                                <div className='col-4 responsePostCol-title'>
                                    <h2 className='postResponseTitle'>Responses:</h2>
                                </div>
                            </div>
                            <div className='consulterPostResponse-container'>
                                <div className='container'>
                                    {
                                        props.listResponse.length>0 && props.listResponse.map((item,index)=>
                                        {
                                            return   <CardResponse key={index} username={item.idDoctor} description={item.description} dateCreation={item.dateCreation}/>
                                        })
                                    }

                                </div>
                            </div>
                            <div className='addResponse-container display-align-justify'>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col text-center addResponse-col d-flex '>
                                                <div className='addResponse-pic'>

                                                </div>
                                                <textarea className='form-control' value={response}
                                                onChange={(e)=>setResponse(e.target.value)}
                                                placeholder='Publier une Reponse' style={{width:"70%",marginRight:"2vh"}}></textarea>
                                                <button type='button' className='btn btn-primary'
                                                onClick={()=>
                                                    
                                                    {if (localStorage.getItem("username")===null) {
                                                        alert("you have to LogIn First")

                                                    }
                                                    else if (response.length===0)
                                                    {
                                                        alert("response vide")
                                                    }else
                                                    {
                                                        props.handleSaveResponse(response)
                                                        setResponse("")
                                                    }
                                                }
                                                    
                                                
                                                }
                                                >Publier</button> 
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  )
}

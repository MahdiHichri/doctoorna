import React, { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import ReactDOM  from 'react-dom/client';
export default function CardResponse(props) {
  const [id,setId]=useState("idResponse"+props.i)
  const responseValue=useRef()
  

  const consulter = <div className="card-body">
  <p className="card-text">{props.response.description}</p>
  <div className='d-flex justify-content-center'>
  <a className="btn btn-outline-primary"
  style={{marginRight:"2vh"}}
  onClick={()=>
  {
      props.check(props.response.idPost)
  }}
  >Check Poste</a>
  <a className="btn btn-outline-danger"
    style={{marginRight:"2vh"}}
  onClick={()=>
  {
      props.delete(props.response._id)
  }}
  >Delete Response</a>
      <a className="btn btn-outline-success"
  onClick={()=>
  {
    const root = ReactDOM.createRoot(document.getElementById(id))
      root.render(update)
      
  }}
  >Update Response</a>
  </div>
</div>

  const update =     <div className='row'>
  <div className='col'>
  <div className="mb-3">
<label htmlFor="updateResponseDoctor" className="form-label">Response</label>
<textarea 

className="form-control" ref={responseValue} placeholder={props.response.description} id="updateResponseDoctor" rows="3"></textarea>
</div>
<div className='d-flex justify-content-center align-items-center' style={{marginBottom:"1vh"}}>

<button type='button' className='btn btn-outline-success'
onClick={(e)=>
{ 
if(responseValue.current.value==="")
{
alert("Response Vide")
}
else
{props.update(props.response._id,responseValue.current.value,props.response.idPost,props.response.idDoctor)
setTimeout(()=>
{
  const root = ReactDOM.createRoot(document.getElementById(id))
  root.render(consulter)
},1000)}
}}>update</button>
</div>
  </div>
</div>

  

  
  return (
    <div className="card" style={{marginTop: "5vh"}}>
  <div className="card-header">
    {props.response.idPost}
  </div>
  <div className="card-body">
    <div id={id}>
    {consulter}
  </div>
  <div className="card-footer text-muted">
    {props.response.dateCreation}
  </div>
  </div>
</div>

  )
}

import React, { useRef, useState } from 'react'
import "./connectAsPatient.css"
export default function ConnectAsPatient() {
    const [usernameInput,setUsernameInput] = useState("")

    const usernamePatient=useRef()
  return (
    <div className="modal fade" id="connectPatient" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">connect</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <div className='row'>
                            <div className='col'>
                                <div className='form-group d-flex flex-column align-items-center'>
                                    <label htmlFor='usernamePatient' className='form-label'style={{width:"50%"}}>username: </label>
                                    <input type="text" className='form-control' id='usernamePatient' value={usernameInput} 
                                    onChange={(e)=>{
                                        if(usernameInput.length>0)
                                        {usernamePatient.current.className="form-control is-valid"}
                                        else{
                                            usernamePatient.current.className="form-control is-invalid"
                                        }
                                        setUsernameInput(e.target.value)
                                    
                                    }}
                                    ref={usernamePatient}
                                    name='usernamePatient' style={{width:"50%"}}></input>

<label htmlFor='usernamePatient' className='form-label'style={{width:"50%"}}>Password: </label>
                                    <input type="text" className='form-control' id='passwordPatient'name='passwordPatient' style={{width:"50%"}}></input>
                                    
                                <button type='button' className='btn btn-primary' style={{marginTop:"2vh"}}
                                onClick={()=>
                                {
                                    if(usernameInput.length>0)
                                    {
                                        usernamePatient.current.className="form-control is-valid"
                                        sessionStorage.setItem("usernamePatient",usernameInput)
                                        window.location.replace("/")
                                    }
                                    else
                                    {
                                        usernamePatient.current.className="form-control is-invalid"
                                    }
                                }}
                                >Login In</button>
                                </div>
                            </div>
                        </div>

                    </form>
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

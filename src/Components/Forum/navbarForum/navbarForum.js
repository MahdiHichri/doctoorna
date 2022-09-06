import React, { useEffect, useState } from "react";
import { Topics } from '../Data/Topics'


export default function NavbarForum(props) {


  return (
    <>
     <div className="navbar">
        <div className="container-fluid">
            <div className="row" style={{width:"120%"}}>
                <div className="col-12">
                    <div className="row">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                <a className='btn returnBtn'
          onClick={()=>
          {
            props.f()
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
            <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
            </svg>
          </a>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                <a className='btn returnBtn'
          onClick={()=>
          {
            window.location.reload()
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        </a>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                <button type='button' className='btn btn-outline-secondary w-100' data-bs-toggle="modal" data-bs-target="#ModalCreatePost">
            <strong><i className="bi bi-plus-square"></i><span> </span>Add Post</strong>
          </button>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center">
                <form className="d-flex navbar-forum" role="search" onSubmit={(e)=>{
          e.preventDefault()
          props.search(document.getElementById("browser").value)
        }}>
        <div className='search-topics'>
           <Topics search={props.search} />
        </div>
        <button className="btn btn-outline-success d-none d-md-block" type="submit" onClick={(e)=>{
          e.preventDefault()
          props.search(document.getElementById("browser").value)
        }}>Search</button>
      </form>
                </div>
                    </div>
                </div>  
            </div>
        </div>
     </div>

    </>
   
    
  );
}

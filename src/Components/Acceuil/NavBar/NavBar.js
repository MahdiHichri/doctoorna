import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConnectAsDoctor from "../FirstSection/Modal/ConnectAsDoctor";
import ConnectAsPatient from "../FirstSection/Modal/connectAsPatient";
import ConnectAsPharmacist from "../FirstSection/Modal/ConnectAsPharmacist";
import SignUpDoctor from "../FirstSection/Modal/SignUpDoctor";

import "./NavBar.css"

export default function NavBar() {

  const [dropdown,setDropdown]=useState()

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav d-flex justify-content-center") {
      x.className = "topnav responsive";
    } else {
      x.className = "topnav d-flex justify-content-center";
    }
  }
 
  
  return (
    <>
     <div className="topnav d-flex justify-content-center" id="myTopnav">
  <a className="active" style={{cursor:"pointer"}} onClick={()=>window.location.replace("/")}>Home</a>
  {
    window.location.pathname==="/"&&
    <>
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li style={{cursor:"pointer"}}><a href="News" className="dropdown-item">News</a></li>
            <li style={{cursor:"pointer"}}><a href="Forum" className="dropdown-item">Forum</a></li>
            <li style={{cursor:"pointer"}}><a href="BMIC" className="dropdown-item">BMI calculator</a></li>
            <li style={{cursor:"pointer"}}><a href="SC" className="dropdown-item">Symptom Checker</a></li>
            <li style={{cursor:"pointer"}}><a href="DGS" className="dropdown-item">Drugs Search</a></li>
            <li style={{cursor:"pointer"}}><a href="DS" className="dropdown-item">Disease Search</a></li>
          </ul>
  </>}
  <a href="contact">Contact</a>
  <a href="about">About</a>
  <a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars" />
  </a>
  {
    localStorage.getItem("username")===null ? sessionStorage.getItem("usernamePatient")===null ?
    <>
      <div>
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            connect
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li style={{cursor:"pointer"}}><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#connectPatient">Patient</a></li>
            <li style={{cursor:"pointer"}}><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#ConnectAsDoctor">Doctor</a></li>
          </ul>
          </div>
    </> 
    :
    <>
    <div>
    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {sessionStorage.getItem("usernamePatient")}
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li style={{cursor:"pointer"}}><a className="dropdown-item"
            onClick={()=>
            {
              sessionStorage.removeItem("usernamePatient")
              window.location.reload()
            }}
            >Deconnecter</a></li>
          </ul>
          </div>
          </>
    :

    <>
    <div>
    <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li style={{cursor:"pointer"}}><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#ConnectAsDoctor" onClick={()=>window.location.replace("/profile")}>consulter</a></li>
            <li><hr className="dropdown-divider" style={{color:"white"}}/></li>
            <li style={{cursor:"pointer"}}><a className="dropdown-item"
            onClick={()=>
            {
              localStorage.removeItem("username")
              window.location.reload()
            }}
            >Deconnecter</a></li>
          </ul>
          </div>
          </>
  }
  </div>

      <ConnectAsDoctor></ConnectAsDoctor>
      <ConnectAsPatient />
    </>
   
    
  );
}

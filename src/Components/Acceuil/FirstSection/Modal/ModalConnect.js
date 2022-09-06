import React from "react";
import "./ModalConnect.css";

import doctor from "./images/doctor-pic.jpg"
import ConnectAsDoctor from "./ConnectAsDoctor";
import ConnectAsPharmacist from "./ConnectAsPharmacist";

import Pharmacist from "./images/Pharmacist-pic.jpg"
import Patient from "./images/Patient-pic.webp"
import ConnectAsPatient from "./connectAsPatient";

function Modal() {
  return (
    <div className="Connect-Modal">
    <div className="modal fade" id="Connect-Modal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <div className="ms-auto">
          <h1 className="modal-title" id="exampleModalLabel">Connect</h1>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
   
            <div className="container">
              <div className="row">
              <div className="offset-lg-2 col-lg-4 col-sm-12 ">
              <div className="doctor-pic mx-auto" >
                  <img src={Patient}></img>
                  </div>
                  <div className="connect-btn">
                  <button className="btn btn-outline-success" data-bs-target="#connectPatient" data-bs-toggle="modal" >Connect As Patient</button>
                  </div>
                  </div>
   
                  <div className="col-lg-4 col-sm-12">
                  <div className="doctor-pic">
                  <img src={doctor}></img>
                  </div>
                  <div className="connect-btn">
                  <button className="btn btn-outline-success" data-bs-target="#ConnectAsDoctor" data-bs-toggle="modal">Connect As Doctor</button>
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
    <ConnectAsPatient />
    <ConnectAsDoctor />
  </div>
  );
}

export default Modal;
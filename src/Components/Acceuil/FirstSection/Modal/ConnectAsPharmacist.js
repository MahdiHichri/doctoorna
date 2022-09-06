import React from "react";

import "./ConnectAsPharmacist.css"

import im from './images/undraw_file_sync_ot38.svg'
import messenger from './images/messenger.svg'
import google from "./images/google.svg"
import twitter from "./images/twitter.svg"
import facebook from "./images/facebook.svg"

import {Link} from "react-router-dom"

export default function ConnectAsPharmacist()
{
    return(
        <div className="modal fade" id="ConnectAsPharmacist" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">Connect As Patient</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="content">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-md-2">
                        <img src={im} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                            <div className="mb-4">
                            <h3>Sign In <strong></strong></h3>
                            </div>
                            <form action="#" method="post">
                            <div className="form-group first">
                                
                                <input type="text" className="form-control" id="username" required placeholder="Username" />

                            </div>
                            <div className="form-group last mb-4">
                                
                                <input type="password" className="form-control" id="password" required placeholder="Password"/>
                                
                            </div>
                            
                            <div className="d-flex mb-5 align-items-center">
                                <label className="mb-0"><Link to="SignUpAsPharmacist"><a className="caption" >Sign Up</a></Link> 
                                
                                
                                </label>
                                <span className="ms-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
                            </div>
                            <div className="login">
                            <input type="submit" value="Log In" className="btn text-white btn-primary"  />
                            </div>
                            <span className="d-block text-left my-4 text-muted"> or sign in with</span>
                            
                            <div className="social-login">
                                <a href="#" className="facebook">
                                <span className="icon-facebook mr-3"><img src={facebook} /></span>
                                </a>
                                <a href="#" className="twitter">
                                <span className="icon-twitter mr-3"><img src={twitter} /></span>
                                </a>
                                <a href="#" className="google">
                                <span className="icon-google mr-3"><img src={google} /></span> 
                                </a>
                            </div>
                            </form>
                            </div>
                        </div>
                        
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-target="#Connect-Modal" data-bs-toggle="modal">Return</button>
            </div>
          </div>
        </div>
      </div>
    )
}
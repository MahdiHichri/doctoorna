
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";

import "./FirstSection.css"
import Modal from "./Modal/ModalConnect";

import Background from "./Images/Background.png"
import { Container } from "react-bootstrap";
import { Button } from "bootstrap";

import { Link } from "react-router-dom";



export default function FirstSection()
{


    return(
        <div className="First-Section">
            


                <div className="container FST d-flex flex-column">
               
                    <div className="row F-Row">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="F-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="F-titre text-center">
                                <h5>this site is full of information from nearly every aspect of medicine, it is quite 
                                    easy to navigate. No matter what page you are currently on, each section of the site
                                     can be accessed with one or two clicks. There is a search at the bottom of each page, 
                                     which allows users to search for any type of information.</h5>
                                    
                                </div>
                            
                                <div className="F-B">


                                {

                                    localStorage.getItem("username")
                                     ?  
                                    <button type="button" id="btn-connect" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#Connect-Modal" disabled>Connect Now!</button>
                                    : sessionStorage.getItem("usernamePatient")
                                    ?  
                                    <button type="button" id="btn-connect" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#Connect-Modal" disabled>Connect Now!</button>
                                    :
                                    <button type="button" id="btn-connect" className="btn btn-success " data-bs-toggle="modal" data-bs-target="#Connect-Modal">Connect Now!</button>

                                }

                                
                                </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="F-BG">
                                
                            </div>
                        </div>
                    </div>
                    <div className="row S-Row wow fadeInUp" data-wow-delay="0.1s" id="News">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="S-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="S-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>Health & Medical NEWS</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>This site has a valuable news section. This section provides information on various 
                                    events that are happening in the medical world. For instance, you will get to learn about 
                                    various trends taking place in the world.This news sections can serve as a useful resource 
                                    for those who are doing research on major public health issues globally.</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="/NEWS"><button type="button" className="btn btn-success">Check News</button></Link> 
                                
                                </div>
                        </div>
                    </div>
                    <div className="row T-Row wow fadeInUp" data-wow-delay="0.1s" id="Forum">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="T-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>Engage With Other Doctors</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>We have a discussion board where doctors and patients can freely interact.
                                     This can help a doctor to provide insight to patients and gain some by following various discussions. 
                                     For doctors who wish to gain a summary
                                     of a new medical condition, you can quickly look it up on ower <strong>WEBSITE</strong> .</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="/Forum"><button type="button" className="btn btn-success">Get Access To The Forum</button></Link>
                                
                                </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block" id="BMIC">
                            <div className="T-BG">
                                
                            </div>
                        </div>
                    </div>
                    <div className="row C-Row wow fadeInUp" data-wow-delay="0.1s">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="P-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="P-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>BMI calculator</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>Using body mass index (BMI) is one way a person can determine whether or not their weight is healthy for them. BMI takes both height and weight into consideration.</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="BMIC"><button type="button" className="btn btn-success">Calculate Your BMI</button></Link>
                                
                                </div>
                        </div>
                    </div>
                    

                    <div className="row C-Row wow fadeInUp" data-wow-delay="0.1s" id="SC">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="k-BG">
                                
                            </div>
                        </div>
                       
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>Symptom Checker</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>online Symptom Checker. The purpose of this tool is to help you narrow your search along your information journey; this is not a diagnostic tool.

This tool allows you to choose a variety of factors related to your symptom, in order to help you narrow the potential medical conditions related to your symptom. This tool does not incorporate all the personal, health and demographic factors related to you, individually</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="SC"><button type="button" className="btn btn-success">Symptom Checker</button></Link>
                                
                                </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="K-BG">
                                
                            </div>
                        </div>
                    </div>
                    <div className="row C-Row wow fadeInUp" data-wow-delay="0.1s" id="DGS">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="O-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="O-BG">
                                
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>Drugs Search</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>ower <strong>WEBSITE</strong> provides accurate and independent information on more than 24,000 prescription drugs, over-the-counter medicines and natural products. This material is provided for educational purposes only and is not intended for medical advice, diagnosis or treatment.</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="DGS"><button type="button" className="btn btn-success">Drugs Search</button></Link>
                                
                                </div>
                        </div>

                    </div>
                    <div className="row C-Row wow fadeInUp" data-wow-delay="0.1s" id="DS">
                    <div className="col-lg-5 col-md-12 col-sm-12 d-lg-none d-xl-none">
                            <div className="C-BG">
                                
                            </div>
                        </div>
                       
                        <div className="col-lg-7 col-md-12 col-sm-12 F-CT d-flex flex-column ">
                            
                                
                                <div className="S-titre">
                                <h2><strong>Disease Search</strong></h2>
                                    
                                </div>
                                <div className="S-description text-center">
                                <p>Using body mass index (BMI) is one way a person can determine whether or not their weight is healthy for them. BMI takes both height and weight into consideration.</p>
                                    
                                </div>
                            
                                <div className="F-B">

                                <Link to="DS"><button type="button" className="btn btn-success">Disease Search</button></Link>
                                
                                </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12 d-none d-lg-block">
                            <div className="C-BG">
                                
                            </div>
                        </div>
                    </div>
                   
                </div>
               
                   











                {/* <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <div className="text">
                    
                    <p>{GenerateQuotes()}</p>
                   
                     </div>
                     <div className="btn-connect">
                <div className="row">
                    <div className="col">
                    <button type="button" id="btn-connect" className="btn btn-info " data-bs-toggle="modal" data-bs-target="#Connect-Modal">Connect Now!</button>
                    </div>                
                    </div>
                    </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6  d-none d-xl-block d-lg-block ">
                    <div className="image">
                
               
                <img className="background-img" src={Background} />
                      
            </div>
                    </div>
                </div> */}
            
           
                
        <Modal />     
        </div>
    )
}
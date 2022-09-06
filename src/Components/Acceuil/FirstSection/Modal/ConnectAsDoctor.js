import React, { useRef, useState } from "react";

import "./ConnectAsDoctor.css";

import im from "./images/undraw_file_sync_ot38.svg";
import messenger from "./images/messenger.svg";
import google from "./images/google.svg";
import twitter from "./images/twitter.svg";
import facebook from "./images/facebook.svg";

import { Link } from "react-router-dom";
import axios from "axios";

export default function ConnectAsDoctor() {
  const alertNotFound = useRef();

  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleDoctorAuth() {
    axios
      .post("http://localhost:3002/doctor/Auth", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data.data.length > 0) {
          localStorage.setItem("username", username);
          window.location.replace("/");
        } else alertNotFound.current.className = "alert alert-danger";
      });
  }

  return (
    <div
      className='modal fade'
      id='ConnectAsDoctor'
      aria-hidden='true'
      aria-labelledby='exampleModalToggleLabel2'
      tabIndex='-1'
    >
      <div className='modal-dialog modal-dialog-centered modal-xl'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalToggleLabel2'>
              Connect As Doctor
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='content'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-6 order-md-2'>
                    <img src={im} alt='Image' className='img-fluid' />
                  </div>
                  <div className='col-md-6 contents'>
                    <div className='row justify-content-center'>
                      <div className='col-md-8'>
                        <div className='mb-4'>
                          <h3>
                            Sign In <strong></strong>
                          </h3>
                        </div>
                        <form action='#' method='post'>
                          <div className='form-group first'>
                            <input
                              type='text'
                              className='form-control'
                              id='username'
                              value={username}
                              onChange={(e) => {
                                SetUsername(e.target.value);
                              }}
                              required
                              placeholder='Username'
                            />
                          </div>
                          <div className='form-group last mb-4'>
                            <input
                              type='password'
                              className='form-control'
                              id='password'
                              value={password}
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                              required
                              placeholder='Password'
                            />
                          </div>
                          <div
                            className='alert alert-danger visually-hidden'
                            role='alert'
                            ref={alertNotFound}
                          >
                            account not found{" "}
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              fill='currentColor'
                              className='bi bi-emoji-frown-fill'
                              viewBox='0 0 16 16'
                            >
                              <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-2.715 5.933a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 0 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z' />
                            </svg>
                          </div>
                          <div className='d-flex mb-5 align-items-center'>
                            <label className='mb-0'>
                              
                                <a href="SignUpAsDoctor" className='caption' 
                                onClick={()=>
                                {
                                  document.getElementById("closeModalSigniN").click()
                                }}>Sign Up</a>
                              <a data-bs-dismiss='modal'
              aria-label='Close'
               className="visually-hidden"
               id="closeModalSigniN"></a>
                            </label>
                            <span className='ms-auto'>
                              <a href='#' className='forgot-pass'>
                                Forgot Password
                              </a>
                            </span>
                          </div>
                          <div className='login'>
                            <input
                              type='submit'
                              value='Log In'
                              className='btn btn-outline-success'
                              style={{ fontSize: "20px" }}
                              onClick={(e) => {
                                e.preventDefault();
                                handleDoctorAuth();
                              }}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              className='btn btn-secondary'
              data-bs-target='#Connect-Modal'
              data-bs-toggle='modal'
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

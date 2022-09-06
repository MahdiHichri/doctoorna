import React, { useEffect, useRef, useState } from "react";
import "./Profile.css";
import ReactDOM from "react-dom/client";
import { Route, Router, Routes } from "react-router-dom";
import axios from "axios";
import { specilities } from "../Acceuil/FirstSection/Modal/data/doctorSpecialities";
import { tunsiaStates } from "../Acceuil/FirstSection/Modal/data/tunisiaStates";
import CardResponse from "./CardResponse/CardResponse";
import ConsulterPost from "../Forum/modal/consulterPost";


export default function Profile() {
  const [data, setData] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [response,setResponse] = useState([])
  const [postData,setPostData] = useState({})
  const [listResponse,setListResponse] = useState([])
  const lastNameInput = useRef();
  const firstNameInput = useRef();
  const civilityInput = useRef();
  const phoneNumberInput = useRef();
  const AreaOfPracticeInput = useRef();
  const specialityInput = useRef();
  const cnomCodeInput = useRef();
  const userNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  useEffect(() => {
    if (localStorage.getItem("username") === null) {
      alert("you have to Login First");
      window.location.replace("/");
    } else 
    {
      axios
        .get("http://localhost:3002/doctor/" + localStorage.getItem("username"))
        .then((res) => {
          setData(res.data.data[0]);
          setUpdateData(res.data.data[0]);
        });
        
      axios.get("http://localhost:3002/response/doctor/"+localStorage.getItem("username"))
      .then(res =>
        {
            setResponse(res.data.data)
        })
    }
  }, []);

  function updateDoctor() {
    axios
      .patch(
        "http://localhost:3002/doctor/update/" +
          localStorage.getItem("username"),
        {
          username:
            userNameInput.current.value === ""
              ? data.username
              : userNameInput.current.value,
          lastName:
            lastNameInput.current.value === ""
              ? data.lastName
              : lastNameInput.current.value,
          firstName:
            firstNameInput.current.value === ""
              ? data.firstName
              : firstNameInput.current.value,
          civility:
            civilityInput.current.value === ""
              ? data.civility
              : civilityInput.current.value,
          phoneNumber:
            phoneNumberInput.current.value === ""
              ? data.phoneNumber
              : phoneNumberInput.current.value,
          areaOfPractice:
            AreaOfPracticeInput.current.value === ""
              ? data.areaOfPractice
              : AreaOfPracticeInput.current.value,
          speciality:
            specialityInput.current.value === ""
              ? data.speciality
              : specialityInput.current.value,
          cnomCode:
            cnomCodeInput.current.value === ""
              ? data.cnomCode
              : cnomCodeInput.current.value,
          email:
            emailInput.current.value === ""
              ? data.email
              : emailInput.current.value,
          password:
            passwordInput.current.value === ""
              ? data.password
              : passwordInput.current.value,
        }
      )
      .then((res) => {
        if (res.data.response === "success") alert("profil updated");
        else alert("erreur");
      });

    window.location.reload();
  }

  const Profile = (
    <div className='profile-details consulter-profile d-flex flex-column'>
      <form>
        <div className='row'>
          <div className='col-lg-3 col-6 profile-labels'>
            <div>
              <span>
                <strong>userName:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>First Name:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>Last Name:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>Civility:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>Phone Number:</strong>
              </span>
              <span></span>
            </div>
          </div>
          <div className='col-lg-3 col-6'>
            <div>
              <span>{data._id}</span>
            </div>
            <div>
              <span>{data.firstName}</span>
            </div>
            <div>
              <span>{data.lastName}</span>
            </div>
            <div>
              <span>{data.civility}</span>
            </div>
            <div>
              <span>{data.phoneNumber}</span>
            </div>
          </div>
          <div className='col-lg-3 col-6 profile-labels'>
            <div>
              <span>
                <strong>Area Of Practice:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>Speciality:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>email:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>cnomCode:</strong>
              </span>
              <span></span>
            </div>
            <div>
              <span>
                <strong>password:</strong>
              </span>
              <span></span>
            </div>
          </div>
          <div className='col-lg-3 col-6'>
            <div>
              <span>{data.areaOfPractice}</span>
            </div>
            <div>
              <span>{data.speciality}</span>
            </div>
            <div>
              <span>{data.email}</span>
            </div>
            <div>
              <span>{data.cnomCode}</span>
            </div>
            <div>
              <span>**********</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  const UpdateProfile = (
    <div className='profile-details update-profile d-flex flex-column'>
      <form>
        <div className='row'>
          <div className='col-lg-3 col-6 '>
            <div>
              <label htmlFor='userName' className='form-label'>
                <strong>userName:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='FirstName' className='form-label'>
                <strong>First Name:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='LastName' className='form-label'>
                <strong>Last Name:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='Civility' className='form-label'>
                <strong>Civility:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='PhoneNumber' className='form-label'>
                <strong>Phone Number:</strong>
              </label>
              <span></span>
            </div>
          </div>
          <div className='col-lg-3 col-6'>
            <div>
              <input
                type='text'
                className='form-control'
                ref={userNameInput}
                placeholder={updateData._id}
                id='userName'
                name='userName'
              />
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                ref={firstNameInput}
                placeholder={updateData.firstName}
                id='FirstName'
                name='FirstName'
              ></input>
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                ref={lastNameInput}
                placeholder={updateData.lastName}
                id='LastName'
                name='LastName'
              ></input>
            </div>
            <div>
              <select
                className='form-control'
                type='select'
                ref={civilityInput}
                name='Civility'
                id='Civility'
              >
                <option value={updateData.civility} selected disabled>
                  {updateData.civility}
                </option>
                <option value='Mr'>Mr</option>
                <option value='Mrs'>Mrs</option>
              </select>
            </div>
            <div>
              <input
                type='tel'
                className='form-control'
                ref={phoneNumberInput}
                placeholder={updateData.phoneNumber}
                id='PhoneNumber'
                name='PhoneNumber'
              ></input>
            </div>
          </div>
          <div className='col-lg-3 col-6'>
            <div>
              <label htmlFor='AreaOfPractice' className='form-label'>
                <strong>Area Of Practice:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='Speciality' className='form-label'>
                <strong>Speciality:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='email' className='form-label'>
                <strong>email:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='cnomCode' className='form-label'>
                <strong>cnomCode:</strong>
              </label>
              <span></span>
            </div>
            <div>
              <label htmlFor='password' className='form-label'>
                <strong>password:</strong>
              </label>
              <span></span>
            </div>
          </div>
          <div className='col-lg-3 col-6'>
            <div>
              <select
                type='select'
                className='form-control'
                ref={AreaOfPracticeInput}
                placeholder={updateData.areaOfPractice}
                id='AreaOfPractice'
                name='AreaOfPractice'
              >
                <option value={updateData.areaOfPractice} selected disabled>
                  {updateData.areaOfPractice}
                </option>
                {tunsiaStates.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <select
                className='form-control'
                type='select'
                ref={specialityInput}
                name='Speciality'
                id='Speciality'
              >
                <option value={updateData.speciality} selected disabled>
                  {updateData.speciality}
                </option>
                {specilities.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <input
                type='email'
                className='form-control'
                ref={emailInput}
                placeholder={updateData.email}
                id='email'
                name='email'
              ></input>
            </div>
            <div>
              <input
                type='text'
                className='form-control'
                ref={cnomCodeInput}
                placeholder={updateData.cnomCode}
                id='cnomCode'
                name='cnomCode'
              ></input>
            </div>
            <div>
              <input
                type='password'
                className='form-control'
                ref={passwordInput}
                placeholder={"**********"}
                id='password'
                name='password'
              ></input>
            </div>
          </div>
        </div>
        <div className='row' style={{ height: "5vh", marginTop: "1vh" }}>
          <div className='col'>
            <div className='d-flex justify-content-center align-item-center'>
              <button
                type='button'
                className='btn btn-success'
                onClick={() => {
                  updateDoctor();
                }}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  function checkPost(data)
  {
    axios.get("http://localhost:3002/post/"+data)
    .then(res =>
        {   
            setPostData(res.data.data)
            axios.get("http://localhost:3002/response/"+res.data.data._id)
            .then((res)=>
            {
                setListResponse(res.data.data)
            })
        })
   
  document.getElementById("modal-consulterPostDoctor").click()
  }
  function handleSaveResponse(response)
  {
      axios.post("http://localhost:3002/response/create",{"description":response,
      "idPost":postData._id,"idDoctor":localStorage.getItem("username")}).then((res)=>{alert("response published")})
   
      axios.get("http://localhost:3002/response/"+postData._id)
      .then((res)=>
      {
          setListResponse(res.data.data)
      })
  }
  function deleteResponse(data)
  {
    axios.delete("http://localhost:3002/response/delete/"+data)
    .then(res => 
        {   
            console.log(res.data);
            alert("Response Deleted")
            window.location.reload()
        }).catch((err)=>alert("erreur happened"))
  }
  function updateResponse(id,data,idPost,idDoctor)
  {
    axios.patch("http://localhost:3002/response/update/"+id,
    {
        description:data,
        dateCreation:Date.now(),
        idDoctor:idDoctor,
        idPost:idPost
    }).then(res =>
        {
            alert("Response Updated")
            setTimeout(()=>
            {
                window.location.reload()
            },2000)
        }).catch(err => alert("erreur happened"))


  }
  return (
    <>
    
    <a className='visually hidden' id="modal-consulterPostDoctor" data-bs-toggle="modal" data-bs-target="#modalConsulterPost"/>
      <div className='profile-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 '>
              <div className='profile-resume-container'>
                <div className='profile-pic d-flex flex-column '>
                  <div className='P-pic '></div>
                  <div className='container'>
                    <div className='row '>
                      <div className='offset-1 col-10 text-center'>
                        <span>
                          <strong>{data.firstName}</strong>
                        </span>
                        <span> </span>
                        <span>
                          <strong>{data.lastName}</strong>
                        </span>
                        <div>
                          <span>{data.speciality}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='profile-consulter d-flex flex-column '>
                  <div className='row'>
                    <div className='col'>
                      <button
                        type='button'
                        className='btn btn-outline-success btn-consulter-profile'
                        onClick={() => {
                          const root = ReactDOM.createRoot(
                            document.getElementById("profile-details")
                          );
                          root.render(Profile);
                        }}
                      >
                        <i className='bi bi-person-lines-fill'></i>
                        <span> </span>
                        <strong>Consulter</strong>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='profile-edit d-flex flex-column '>
                  <div className='row'>
                    <div className='col'>
                      <button
                        type='button'
                        className='btn btn-outline-success btn-consulter-profile'
                        onClick={() => {
                          const root = ReactDOM.createRoot(
                            document.getElementById("profile-details")
                          );
                          root.render(UpdateProfile);
                        }}
                      >
                        <i className='bi bi-pencil-square'></i>
                        <span> </span>
                        <strong>Editer</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8 '>
              <div className='profile-content b-s border-success'>
                <div className='profile-content-container'>
                  <div className='profile-header '>
                    <div className='row'>
                      <div className='col'>
                        <h1>
                          <strong>Profile:</strong>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div id='profile-details'>{Profile}</div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'
          style={{marginTop:"5vh"}}
          >
            <div className='col'>
              <div
                className='accordion accordion-flush'
                id='accordionFlushExample'
              >
                <div className='accordion-item'>
                  <h2 className='accordion-header' id='flush-headingOne'>
                    <button
                      className='accordion-button collapsed checkDoctorPOSTE'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                      style={{backgroundColor:"#04aa6d"}}
                    >
                     <strong>My Responses</strong> 
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    className='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div className='accordion-body'>
                      {
                        response.map((item,index)=>
                        {
                            return <CardResponse key={index} i={index} response={item} check={checkPost} delete={deleteResponse} update={updateResponse}/>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConsulterPost postTitle={postData._id} listResponse={listResponse} description={postData.description} dateCreation={postData.dateCreation} topic={postData.idTopic} createdBy={postData.idPatient} handleSaveResponse={handleSaveResponse}/>
    </>
  );
}

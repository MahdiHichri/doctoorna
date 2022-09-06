import React, { useRef, useState } from "react";
import "./SignUpAsPharmacist.css"
import ReactDOM from 'react-dom/client'
import axios from "axios";
import { specilities } from "./data/doctorSpecialities";
import { tunsiaStates } from "./data/tunisiaStates";

export default function SignUpAsDoctor() {


    const lastNameInput = useRef()
    const firstNameInput = useRef()
    const civilityInput = useRef()
    const dateOfBirthInput = useRef()
    const phoneNumberInput = useRef()
    const stateOfResidenceInput = useRef()
    const AreaOfPracticeInput = useRef()
    const specialityInput = useRef()
    const presentationInput = useRef()
    const AvailabilityScheduleInput = useRef()
    const cnomCodeInput = useRef()
    const userNameInput = useRef()
    const emailInput = useRef()
    const passwordInput = useRef()
    const rePasswordInput = useRef()

    const {data,setData}=useState("")

    const [formInputs,setFormInputs] = useState
    ({
        "LastName":"",
        "FirstName":"",
        "civility":"",
        "dateOfBirth":"",
        "phoneNumber":"",
        "stateOfResidence":"",
        "AreaOfpractice":"",
        "speciality":"",
        "presentation":"",
        "AvailibilitySchedule":"",
        "cnomCode":""
    })

  const FirstForm = (
    <div className='SignUp-Form'>
    <header className='SignUp-Form-Header'>
      <h1>Sign Up As Doctor</h1>
    </header>
    <hr />
    <div className='SignUp-Form-Content' role='document'>
      <form>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Last-Name'>
                  Last Name
                </label>
                <input
                  className='form-control'
                  onChange={(e)=>
                {
                    setFormInputs({...formInputs,LastName:e.target.value})
                }}
                value={formInputs.LastName}
                ref={lastNameInput}
                  type='text'
                  name='Last-Name'
                  id='Last-Name'
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='First-Name'>
                  First Name
                </label>
                <input
                  className='form-control'
                  type='text'
                  name='First-Name'
                  id='First-Name'
                  ref={firstNameInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,FirstName:e.target.value})
                    }}
                    value={formInputs.FirstName}
                />
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Civility'>
                  Civility
                </label>
                <select
                  className='form-control'
                  type='select'
                  name='Civility'
                  id='Civility'
                  ref={civilityInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,civility:e.target.value})
                    }}
                    value={formInputs.civility}
                >
                  <option value='' selected disabled>
                    Choose Your Civility
                  </option>
                  <option value='Mr'>Mr</option>
                  <option value='Mrs'>Mrs</option>
                </select>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Date-of-Birth'>
                  Date of Birth
                </label>
                <input
                  className='form-control'
                  type='date'
                  name='Date-of-Birth'
                  id='Date-of-Birth'
                  ref={dateOfBirthInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,dateOfBirth:e.target.value})
                    }}
                    value={formInputs.dateOfBirth}
                />
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Phone-number'>
                  Phone number
                </label>
                <input
                  className='form-control'
                  type='tel'
                  name='Phone-number'
                  id='Phone-number'
                  ref={phoneNumberInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,phoneNumber:e.target.value})
                    }}
                    value={formInputs.phoneNumber}
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='State-of-residence'>
                  State of residence
                </label>
                <select
                  className='form-control'
                  type='select'
                  name='State-of-residence'
                  id='State-of-residence'
                  ref={stateOfResidenceInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,stateOfResidence:e.target.value})
                    }}
                    value={formInputs.stateOfResidence}
                >
                  <option value='' defaultValue disabled>
                    Choose State Of Residence
                  </option>
                  <option value='Mrs'>Mrs</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Area-of-practice'>
                  Area of practice
                </label>
                <select
                  className='form-control'
                  type='select'
                  name='Area-of-practice'
                  id='Area-of-practice'
                  ref={AreaOfPracticeInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,AreaOfpractice:e.target.value})
                    }}
                    value={formInputs.AreaOfpractice}
                >
                  <option value='' selected disabled>
                    Choose Your Area Of Practice
                  </option>
                  <option value='Mrs'>Mrs</option>
                </select>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label className='from-label' htmlFor='Speciality'>
                  Speciality
                </label>
                <select
                  className='form-control'
                  type='select'
                  name='Speciality'
                  id='Speciality'
                  ref={specialityInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,speciality:e.target.value})
                    }}
                    value={formInputs.speciality}
                >
                  <option value='' selected disabled>
                    Choose Your Speciality
                  </option>
                  <option value='Mrs'>Mrs</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='Presentation'>
                <div className='form-group'>
                  <label className='from-label' htmlFor='Presentation'>
                    Presentation
                  </label>
                  <textarea
                    className='Form-control'
                    rows='2'
                    name='Presentation'
                    id='Presentation'
                    placeholder='Example Monday 08h00-12h00 14h00-18h00'
                    ref={presentationInput}
                    onChange={(e)=>
                        {
                            setFormInputs({...formInputs,presentation:e.target.value})
                        }}
                        value={formInputs.presentation}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='Availability-schedule'>
                <div className='form-group'>
                  <label
                    className='from-label'
                    htmlFor='Availability-schedule'
                  >
                    Availability schedule
                  </label>
                  <textarea
                    rows='2'
                    name='Availability-schedule'
                    id='Availability-schedule'
                    placeholder='Example Monday 08h00-12h00 14h00-18h00'
                    ref={AvailabilityScheduleInput}
                    onChange={(e)=>
                        {
                            setFormInputs({...formInputs,AvailibilitySchedule:e.target.value})
                        }}
                        value={formInputs.AvailibilitySchedule}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='offset-lg-3 offset-md-1 offset-sm-1 col-lg-6 col-md-10 col-sm-10'>
              <div className='form-group'>
                <label className='from-label' htmlFor='CNOM-code'>
                  CNOM-code
                </label>
                <input
                  className='form-control'
                  type='text'
                  name='CNOM-code'
                  ref={cnomCodeInput}
                  onChange={(e)=>
                    {
                        setFormInputs({...formInputs,cnomCode:e.target.value})
                    }}
                    value={formInputs.cnomCode}
                  id='CNOM-code'
                />
              </div>
            </div>
          </div>
        </div>

        <footer className='SignUp-Form-Footer'>
          <div className='Reset-btn'>
            <button type='reset' id='Reset' name='Reset'>
              Reset
            </button>
          </div>
          <div className='Next-btn'>
            <button
              type='submit'
              id='next'
              name='next'
              onClick={verifInputs}
            >
              Next
            </button>
            {/* <button type="submit" id="next" name="next" >Next</button> */}
          </div>
        </footer>
      </form>
    </div>
  </div>
  );

  const SecondForm = (
    <div className='SignUp-Form'>
      <header className='SignUp-Form-Header'>
        <h1>Sign Up As Doctor</h1>
      </header>
      <hr />
      <div className='SignIn-Form-Content' role='document'>
        <form>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8'>
              <div className='form-group'>
                  <label htmlFor='username' className='form-label'>
                    UserName
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='username'
                    name='username'
                        ref={userNameInput}
                  ></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    name='email'
                        ref={emailInput}
                  ></input>
                </div>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-8'>
                <div className='form-group'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='Password'
                    name='Password'
                        ref={passwordInput}
                    required
                  />
                </div>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-8'>
                <div className='form-group'>
                  <label htmlFor='R-password' className='form-label'>
                    Repeat Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='R-password'
                    name='R-password'
                        ref={rePasswordInput}
                    required
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <footer className='SignUp-Form-Footer'>
            <button
              className='btn'
              id='valider'
              name='valider'
              onClick={(e)=>
            {
                e.preventDefault()
                verifInputsNextForm()
                createDoctor()
            }}
            >
              Valider
            </button>
          </footer>
        </form>
      </div>
    </div>
  );

    function verifInputs() 
    {
    
        formInputs.LastName.length>0 ? !parseInt(formInputs.LastName) ? lastNameInput.current.className="form-control is-valid" : lastNameInput.current.className="form-control is-invalid" : lastNameInput.current.className="form-control is-invalid"
        formInputs.FirstName.length>0 ? !parseInt(formInputs.FirstName) ? firstNameInput.current.className="form-control is-valid" : firstNameInput.current.className="form-control is-invalid" : firstNameInput.current.className="form-control is-invalid"
        formInputs.civility.length>0 ? !parseInt(formInputs.civility) ? civilityInput.current.className="form-control is-valid" : civilityInput.current.className="form-control is-invalid" : civilityInput.current.className="form-control is-invalid"
        formInputs.dateOfBirth.length>0 ? dateOfBirthInput.current.className="form-control is-valid" : dateOfBirthInput.current.className="form-control is-invalid" 
        formInputs.phoneNumber.length===8 ? parseInt(formInputs.phoneNumber) ? phoneNumberInput.current.className="form-control is-valid" : phoneNumberInput.current.className="form-control is-invalid" : phoneNumberInput.current.className="form-control is-invalid"
        formInputs.stateOfResidence.length>0 ? !parseInt(formInputs.stateOfResidence) ? stateOfResidenceInput.current.className="form-control is-valid" : stateOfResidenceInput.current.className="form-control is-invalid" : stateOfResidenceInput.current.className="form-control is-invalid"
        formInputs.AreaOfpractice.length>0 ? !parseInt(formInputs.AreaOfpractice) ? AreaOfPracticeInput.current.className="form-control is-valid" : AreaOfPracticeInput.current.className="form-control is-invalid" : AreaOfPracticeInput.current.className="form-control is-invalid"
        formInputs.speciality.length>0 ? !parseInt(formInputs.speciality) ? specialityInput.current.className="form-control is-valid" : specialityInput.current.className="form-control is-invalid" : specialityInput.current.className="form-control is-invalid"
        formInputs.presentation.length>0 ? !parseInt(formInputs.presentation) ? presentationInput.current.className="form-control is-valid" : presentationInput.current.className="form-control is-invalid" : presentationInput.current.className="form-control is-invalid"
        formInputs.AvailibilitySchedule.length>0 ? !parseInt(formInputs.AvailibilitySchedule) ? AvailabilityScheduleInput.current.className="form-control is-valid" : AvailabilityScheduleInput.current.className="form-control is-invalid" : AvailabilityScheduleInput.current.className="form-control is-invalid"
        formInputs.cnomCode.length===5 ? parseInt(formInputs.cnomCode) ? cnomCodeInput.current.className="form-control is-valid" : cnomCodeInput.current.className="form-control is-invalid" : cnomCodeInput.current.className="form-control is-invalid"

        var inputs=document.getElementsByTagName("input")
        var test=true
        var index=0
        while(index<inputs.length&&test===true)
        {
            inputs[index].className==="form-control is-invalid" ? test=false : test=true
            index++
        }
        return test
    }
    function nextForm()
    {
        if(verifInputs)
        {
            const root = ReactDOM.createRoot(document.getElementById("change"))
            root.render(SecondForm)
        } 
    }

    function verifInputsNextForm()
    {
        userNameInput.current.value.length>0 ? userNameInput.current.className="form-control is-valid" : userNameInput.current.className="form-control is-invalid" 
        emailInput.current.value.length>5 ? emailInput.current.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? emailInput.current.className="form-control is-valid" : emailInput.current.className="form-control is-invalid" : emailInput.current.className="form-control is-invalid"
        passwordInput.current.value.length>5 ? passwordInput.current.className="form-control is-valid" : passwordInput.current.className="form-control is-invalid" 
        rePasswordInput.current.value===passwordInput.current.value ? rePasswordInput.current.className="form-control is-valid" : rePasswordInput.current.className="form-control is-invalid" 

        var inputs=document.getElementsByTagName("input")
        var test=true
        var index=0
        while(index<inputs.length&&test===true)
        {
            inputs[index].className==="form-control is-invalid" ? test=false : test=true
            index++
        }

        return test
    }
    
    function createDoctor()
    {
        if(verifInputsNextForm())
        {
            axios.post("http://localhost:3002/doctor/create",
            {
                "username":userNameInput.current.value,
                "lastName":formInputs.LastName,
                "firstName":formInputs.FirstName,
                "civility":formInputs.civility,
                "phoneNumber":parseInt(formInputs.phoneNumber),
                "areaOfPractice":formInputs.AreaOfpractice,
                "speciality":formInputs.speciality,
                "cnomCode":formInputs.cnomCode,
                "email":emailInput.current.value,
                "password":passwordInput.current.value
            })
            .then((res)=>
            {
                if(res.data.response==="success")
                {alert("account created"); window.location.replace("/")}
                else
                alert("error: ",JSON.stringify(res.data.data))
            })
        }
    }

  return (
    <div className='container-fluid bg'>
      <div className='SignUp-Content'>
        <div className='row bg-small-d d-lg-none'>
          <div className='col-12'>
            <div className='bg-img-d'></div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-7 col-md-12 col-sm-12'>
            <div id='change' className='change'>
              <div className='SignUp-Form'>
                <header className='SignUp-Form-Header'>
                  <h1>Sign Up As Doctor</h1>
                </header>
                <hr className="hrs"/>
                <div className='SignUp-Form-Content' role='document'>
                  <form>
                    <div className='container-fluid'>
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Last-Name'>
                              Last Name
                            </label>
                            <input
                              className='form-control'
                              onChange={(e)=>
                            {
                                setFormInputs({...formInputs,LastName:e.target.value})
                            }}
                            value={formInputs.LastName}
                            ref={lastNameInput}
                              type='text'
                              name='Last-Name'
                              id='Last-Name'
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='First-Name'>
                              First Name
                            </label>
                            <input
                              className='form-control'
                              type='text'
                              name='First-Name'
                              id='First-Name'
                              ref={firstNameInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,FirstName:e.target.value})
                                }}
                                value={formInputs.FirstName}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Civility'>
                              Civility
                            </label>
                            <select
                              className='form-control'
                              type='select'
                              name='Civility'
                              id='Civility'
                              ref={civilityInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,civility:e.target.value})
                                }}
                                value={formInputs.civility}
                            >
                              <option value='' selected disabled>
                                Choose Your Civility
                              </option>
                              <option value='Mr'>Mr</option>
                              <option value='Mrs'>Mrs</option>
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Date-of-Birth'>
                              Date of Birth
                            </label>
                            <input
                              className='form-control'
                              type='date'
                              name='Date-of-Birth'
                              id='Date-of-Birth'
                              ref={dateOfBirthInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,dateOfBirth:e.target.value})
                                }}
                                value={formInputs.dateOfBirth}
                            />
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Phone-number'>
                              Phone number
                            </label>
                            <input
                              className='form-control'
                              type='tel'
                              name='Phone-number'
                              id='Phone-number'
                              ref={phoneNumberInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,phoneNumber:e.target.value})
                                }}
                                value={formInputs.phoneNumber}
                            />
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='State-of-residence'>
                              State of residence
                            </label>
                            <select
                              className='form-control'
                              type='select'
                              name='State-of-residence'
                              id='State-of-residence'
                              ref={stateOfResidenceInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,stateOfResidence:e.target.value})
                                }}
                                value={formInputs.stateOfResidence}
                            >
                              <option value='' defaultValue disabled>
                                Choose State Of Residence
                              </option>
                              {
                                tunsiaStates.map((item,index)=>
                                {
                                  return <option key={index} value={item}>{item}</option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Area-of-practice'>
                              Area of practice
                            </label>
                            <select
                              className='form-control'
                              type='select'
                              name='Area-of-practice'
                              id='Area-of-practice'
                              ref={AreaOfPracticeInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,AreaOfpractice:e.target.value})
                                }}
                                value={formInputs.AreaOfpractice}
                            >
                              <option value='' selected disabled>
                                Choose Your Area Of Practice
                              </option>
                              {
                                tunsiaStates.map((item,index)=>
                                {
                                  return <option key={index} value={item}>{item}</option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='Speciality'>
                              Speciality
                            </label>
                            <select
                              className='form-control'
                              type='select'
                              name='Speciality'
                              id='Speciality'
                              ref={specialityInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,speciality:e.target.value})
                                }}
                                value={formInputs.speciality}
                            >
                              <option value='' selected disabled>
                                Choose Your Speciality
                              </option>
                              {
                                specilities.map((item,index)=>
                                {
                                  return <option key={index} value={item}>{item}</option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='Presentation'>
                            <div className='form-group'>
                              <label className='from-label' htmlFor='Presentation'>
                                Presentation
                              </label>
                              <textarea
                                className='Form-control'
                                rows='2'
                                name='Presentation'
                                id='Presentation'
                                placeholder='Example Monday 08h00-12h00 14h00-18h00'
                                ref={presentationInput}
                                onChange={(e)=>
                                    {
                                        setFormInputs({...formInputs,presentation:e.target.value})
                                    }}
                                    value={formInputs.presentation}
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-12 col-sm-12'>
                          <div className='Availability-schedule'>
                            <div className='form-group'>
                              <label
                                className='from-label'
                                htmlFor='Availability-schedule'
                              >
                                Availability schedule
                              </label>
                              <textarea
                                rows='2'
                                name='Availability-schedule'
                                id='Availability-schedule'
                                placeholder='Example Monday 08h00-12h00 14h00-18h00'
                                ref={AvailabilityScheduleInput}
                                onChange={(e)=>
                                    {
                                        setFormInputs({...formInputs,AvailibilitySchedule:e.target.value})
                                    }}
                                    value={formInputs.AvailibilitySchedule}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className='row'>
                        <div className='offset-lg-3 offset-md-1 offset-sm-1 col-lg-6 col-md-10 col-sm-10'>
                          <div className='form-group'>
                            <label className='from-label' htmlFor='CNOM-code'>
                              CNOM-code
                            </label>
                            <input
                              className='form-control'
                              type='text'
                              name='CNOM-code'
                              ref={cnomCodeInput}
                              onChange={(e)=>
                                {
                                    setFormInputs({...formInputs,cnomCode:e.target.value})
                                }}
                                value={formInputs.cnomCode}
                              id='CNOM-code'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <footer className='SignUp-Form-Footer' style={{minHeight:"10vh",marginBottom:"5vh"}}>
                      <div className='Reset-btn'>
                        <button type='reset' id='Reset' name='Reset'>
                          Reset
                        </button>
                      </div>
                      <div className='Next-btn'>
                        <button
                          type='button'
                          id='next'
                          name='next'
                          onClick={()=>
                        {
                            if(verifInputs())
                            nextForm()
                        }}
                        >
                          Next
                        </button>
                        {/* <button type="submit" id="next" name="next" >Next</button> */}
                      </div>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-5 d-none d-lg-block'>
            <div className='bg-big-d'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

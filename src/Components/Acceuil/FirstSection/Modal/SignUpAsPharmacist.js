import React, { useState } from "react";

import './SignUpAsPharmacist.css'

function isnumber(ch) 
{
  var test
  if ((ch != "")) {
    for (var i = 0; i < ch.length; i++) {
      if ((ch.charAt(i) == "0") || (ch.charAt(i) == "1") || (ch.charAt(i) == "2") || (ch.charAt(i) == "3") || (ch.charAt(i) == "4") || (ch.charAt(i) == "5") || (ch.charAt(i) == "6") || (ch.charAt(i) == "7") || (ch.charAt(i) == "8") || (ch.charAt(i) == "9")) {
        test = true
      } else {
        test = false
        break
      }


    }

  }
  return test
}
function isString(ch) {
  var test
  for (var i = 0; i < ch.length; i++) {
    if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z')) && (this.isnumber(ch) == false)) {
      test = true
    } else {
      test = false

    }
  }
  return test
}

function isnumberstring(ch)
{
  var test
  for (var i = 0; i < ch.length; i++) {
    if (((ch.charAt(i) >= 'a') && (ch.charAt(i) <= 'z')) || ((ch.charAt(i) >= 'A') && (ch.charAt(i) <= 'Z'))||((ch.charAt(i) == "0") || (ch.charAt(i) == "1") || (ch.charAt(i) == "2") || (ch.charAt(i) == "3") || (ch.charAt(i) == "4") || (ch.charAt(i) == "5") || (ch.charAt(i) == "6") || (ch.charAt(i) == "7") || (ch.charAt(i) == "8") || (ch.charAt(i) == "9"))) 
    {
      test = true
    } else {
      test = false
break
    }
  }
  return test

}

export default function SignUpPharmacist()
{
    
    const [Form,SetForm]= useState(<SignUp />)
    
    function changer()
    {
        SetForm(<SignIn />)
    }
    function Return()
    {
        SetForm(<SignUp />)
    }

    function SignIn()
{

  function validEmail() {
    var Email=document.getElementById("email")
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var valid=false
    if (Email.value.match(validRegex)) {
  
      
  
      valid=true
      Email.className="form-control is-valid"
  
    } else {
  
      valid=true
      Email.className="form-control is-invalid"
  
    }
    return valid
  }

function validPassword()
{
  var Password = document.getElementById("Password")
  var exprR=/^[A-Z]+([a-zA-Z]|[0-9]|[.-/=)@_\('"&%*$!:;,])+$/;
  

  var valid=true

  if((!Password.value.match(exprR))||(Password.value.length<10))
  {
    valid=false
    Password.className="form-control is-invalid"
  }
  else
  {
    Password.className="form-control is-valid"
  }
  return(valid)

}
    return(
        <div className="SignUp-Form ">
            <header className="SignUp-Form-Header" >
              <h1>Sign Up As Patient</h1>
            </header>
            <hr />
            <div className="SignIn-Form-Content" role="document">
              <form>
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={validEmail}></input>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="password" className="form-label" >Password</label>
                                <input type="password" className="form-control" id="Password" name="Password" onChange={validPassword}  required />
                             
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-8">
                            <div className="form-group">
                                <label htmlFor="R-password" className="form-label">Repeat Password</label>
                                <input type="password"  className="form-control" id="R-password" name="R-password"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="SignUp-Form-Footer">
                    <button className="btn" id="valider" name="valider" onClick={Return}>Valider</button> 
                </footer>
              </form>
            </div>
            
               
          
        
        </div>
        
        
    )
}
// var b=document.getElementById("next")
// b.addEventListener("hover",next)
// function next()
// {
//   var b=document.getElementById("next")
//   if((validCivility())&&(validFirstName())&&(validLastName())&&(validPhoneNumber())&&(validCnomCode()))
//   {
//     b.disabled=false
//   }
// }
function SignUp()
{
    
    function test()
    {
        var x=document.getElementById("Last-Name")
    }
    function validLastName()
    {
      var valid=true
      var LastName=document.getElementById("Last-Name")
      if(LastName.value=="")
      {
        valid=false
      }
      else if(!isString(LastName.value))
      {
        valid=false
      }
      if (valid==true)
      {
        LastName.className="form-control is-valid"

      }
      else
      {
        LastName.className="form-control is-invalid"
      }
      return valid
    }
    function validFirstName()
    {
      var valid=true
      var FirstName=document.getElementById("First-Name")
      if(FirstName.value=="")
      {
        valid=false
      }
      else if(!isString(FirstName.value))
      {
        valid=false
      }
      if (valid==true)
      {
        FirstName.className="form-control is-valid"

      }
      else
      {
        FirstName.className="form-control is-invalid"
      }
      return valid
    }
        
  
    function validCivility(e)
    {

      
      var valid=false
      var Civility = document.getElementById("Civility")
      
      if (Civility.value=="") {
        valid=false
        
      }
      else
      {
        valid=true
      }

      if (valid==false) {
        Civility.className="form-control is-invalid"
        
      }
      else
      {
        Civility.className="form-control is-valid"
      }

      return valid
    }

    function validPhoneNumber()
    {
      var valid=true
      
      var PhoneNumber=document.getElementById("Phone-number")
      if (PhoneNumber.value=="") 
      {
        valid=false
      }else if (!isnumber(PhoneNumber.value))
      {
        valid=false
      }
      else if(PhoneNumber.value.length!=8)
      {
        valid=false
      }

      if(valid!=true)
      {
        PhoneNumber.className="form-control is-invalid"
        
      }
      else
      {
        PhoneNumber.className="form-control is-valid"
      }
      return valid
    }


    function verif(e)
    {
      e.preventDefault()

      
      validCivility()
      validFirstName()
      validLastName()
      validPhoneNumber()
     
      
    }
 
    function next()
    {
      var b=document.getElementById("next")
      if((validCivility())&&(validFirstName())&&(validLastName())&&(validPhoneNumber()))
      {
        changer()
      }
    }
    return(
        <div className="SignUp-Form">
        <header className="SignUp-Form-Header" >
          <h1>Sign Up As Phamarcist</h1>
        </header>
        <hr />
        <div className="SignUp-Form-Content" role="document">
          <form onSubmit={verif}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="from-label" htmlFor="Last-Name">Last Name</label>
                    <input className="form-control" onChange={validLastName} type="text" name="Last-Name" onKeyDown={test} id="Last-Name" />
                  </div>  
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="from-label" htmlFor="First-Name">First Name</label>
                    <input className="form-control" type="text" name="First-Name" id="First-Name" onChange={validFirstName}/>
                  </div>
                </div>
              </div>
              <br />
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">

                          <label className="from-label" htmlFor="Civility">Civility</label>
                          <select className="form-control" type="select" name="Civility" id="Civility">
                            <option value="" selected disabled>Choose Your Civility</option>
                            <option value="Mr" >Mr</option>
                            <option value="Mrs" >Mrs</option>
                          </select>
                     
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="form-group">
                      <label className="from-label" htmlFor="Date-of-Birth">Date of Birth</label>
                      <input className="form-control" type="date" name="Date-of-Birth" id="Date-of-Birth" />
                    </div>
                  </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="from-label" htmlFor="Phone-number">Phone number</label>
                    <input className="form-control" type="tel" name="Phone-number" id="Phone-number" onChange={validPhoneNumber} />
                  </div>  
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="from-label" htmlFor="State-of-residence">State of residence</label>
                    <select className="form-control" type="select" name="State-of-residence" id="State-of-residence">
                      <option value="" selected disabled>Choose State Of Residence</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <br />
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="Presentation">
                      <div className="form-group">
                      <label className="from-label" htmlFor="Presentation">Presentation</label>
                      <textarea className="Form-control" rows="2"  name="Presentation" id="Presentation" placeholder="Example Monday 08h00-12h00 14h00-18h00">
                      </textarea>
                    </div>
                  </div>
                </div>
             
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="Availability-schedule">
                    <div className="form-group">
                      <label className="from-label" htmlFor="Availability-schedule">Availability schedule</label>
                      <textarea rows="2"  name="Availability-schedule" id="Availability-schedule" placeholder="Example Monday 08h00-12h00 14h00-18h00">

                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
              <br />
             
            </div>
            
              <footer className="SignUp-Form-Footer">
                <div className="Reset-btn">
                  <button type="reset" id="Reset"  name="Reset">Reset</button>
                </div>
                <div className="Next-btn">
                  <button type="submit" id="next" name="next" onClick={next} >Next</button>
                  {/* <button type="submit" id="next" name="next" >Next</button> */}
                </div>
              </footer>
            
          </form>
        </div>
    </div>
    )
}
        

    return(
        <div className="container-fluid bg-p">
        <div className="SignUp-Content">
        <div className="row bg-small-p d-lg-none">
          <div className="col-12">
            <div className="bg-img-p">
  
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-7 col-md-12 col-sm-12">
            <div id="change" className="change">
                      {Form}
            </div>
 
          </div>
          <div className="col-5 d-none d-lg-block">
            <div className="bg-big-p">
  
            </div>
          </div>
          
        </div>
      </div>
      </div>
    )
    }

    


import React, { useRef, useState } from "react";
import NavBar from "../Acceuil/NavBar/NavBar";

import "./BMI.css"



function isFloat(n){
    return n.match(/^[+-]?\d+(\.\d+)?$/);
}



export default function BMI()
{

    // const [test,SetTest] = useState(true)
    const heightInput=useRef()
    const weightInput=useRef()
    const resultBMI=useRef()
    const resultHeader=useRef()

    function verif()
    {
        var test=true
        

        if (heightInput.current.value === "")
        {
            heightInput.current.className="form-control is-invalid"
            test=false
        }
        else if(isFloat(heightInput.current.value))
        {
            heightInput.current.className="form-control is-valid"
            test=true
        }
        else
        {
            heightInput.current.className="form-control is-invalid"
            test=false
        }

        if (weightInput.current.value === "")
        {
            weightInput.current.className="form-control is-invalid"
            test=false
        }
        else if(isFloat(weightInput.current.value))
        {
            weightInput.current.className="form-control is-valid"
            test=true
        }
        else
        {
            weightInput.current.className="form-control is-invalid"
           test=false
        }

        if(test)
        {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1760b212cdmsh7e26b426b86a527p102040jsnbf769e214203',
                    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
                }
            };

            fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight='+weightInput.current.value+'&height='+heightInput.current.value, options)
                .then(response => response.json())
                .then(response => 
                    {   
                        if(response.bmi<=18.5)
                        {resultBMI.current.innerHTML=`<div class="alert alert-primary" role="alert">
                        <h2><strong>BMI of under 18.5</strong><h2>
                        A BMI of under 18.5 indicates that a person has insufficient weight, so they may need to put on some weight. They should ask a doctor or dietitian for advice.
                        </div>`
                        
                        resultHeader.current.innerHTML=`<span class="d-flex"><h1>Your BMI:</h1><h1 class="text-primary"><strong>${response.bmi.toFixed(2)}</strong></h1></span>`   
                        }


                        if((response.bmi<=24.9)&&(response.bmi>18.5))
                        {resultBMI.current.innerHTML=`<div class="alert alert-success" role="alert">
                        <h2><strong>BMI of 18.5–24.9</strong><h2>
                        A BMI of 18.5–24.9 indicates that a person has a healthy weight for their height. By maintaining a
                         healthy weight, they can lower their risk of developing serious health problems. 
                        </div>`
                    
                        resultHeader.current.innerHTML=`<span class="d-flex"><h1>Your BMI:</h1><h1 class="text-success"><strong>${response.bmi.toFixed(2)}</strong></h1></span>`    
                        }
                        

                        if((response.bmi<=29.9)&&(response.bmi>=25))
                        {resultBMI.current.innerHTML=`<div class="alert alert-warning" role="alert">
                        <h2><strong>BMI of 25–29.9</strong><h2>
                        A BMI of 25–29.9 indicates that a person is slightly overweight. A doctor may advise
                        them to lose some weight for health reasons. They should talk with a doctor 
                        or dietitian for advice. 
                        </div>`
                    
                    
                        resultHeader.current.innerHTML=`<span class="d-flex"><h1>Your BMI:</h1><h1 class="text-warning"><strong>${response.bmi.toFixed(2)}</strong></h1></span>` 
                        }

                        if(response.bmi>=30)
                        {resultBMI.current.innerHTML=`<div class="alert alert-danger" role="alert">
                        <h2><strong>BMI of over 30</strong><h2>
                        A BMI of over 30 indicates that a person has obesity. Their health may be at risk if
                         they do not lose weight. 
                        They should talk with a doctor or dietitian for advice.
                        </div>`
                    
                        resultHeader.current.innerHTML=`<span class="d-flex"><h1>Your BMI:</h1><h1 class="text-danger"><strong>${response.bmi.toFixed(2)}</strong></h1></span>` 
                        }
                    })



                .catch(err => console.error(err));
        }

    }

    return(
        <>
           
            <div className="container">
                <div className=" BMI-container">
                    <div className="row b-1">
                        <div className="col-12 ">
                            <div className="BMI-title text-center">
                                <h1><strong>BMI</strong> calculator</h1>                            
                            </div>     
                        </div>
                    </div>
                    <div className="row b-2">
                        <div className="col-lg-5 b-3 d-none d-lg-block">

                        </div>
                        <div className="col-lg-7">
                            <form className="bmi-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-bmi-header" ref={resultHeader}>

                                        </div>                                        
                                    </div>
                                </div>
                                <div className="form-bmi-content">
                                    <div className="row">
                                        <div className="offset-1 col-10">
                                            <div className="form-bmi-height d-flex flex-column">
                                                <div className="form-group">
                                                    <label for="height" className="form-label">height</label>
                                                    <input type="text" className="form-control" id="height" name="height" placeholder="Exemple: 1.80 Metre" required ref={heightInput}></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                        <div className="offset-1 col-10">
                                            <div className="form-bmi-weight d-flex flex-column">
                                                <div className="form-group">
                                                    <label for="weight" className="form-label">weight</label>
                                                    <input type="text" className="form-control" id="weight" name="weight" placeholder="Exemple: 80 Kg" required ref={weightInput}></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-bmi-footer ">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-bmi-button">
                                                <button className="btn btn-info" type="button" id="bmi-btn" name="bmi-btn" onClick={verif}>Calculate</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className="BMI-footer">
                        <div className="BMI-result"  ref={resultBMI} >

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
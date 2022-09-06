import React, { startTransition, useEffect, useRef, useState, useTransition } from "react";
import NavBar from "../Acceuil/NavBar/NavBar";

import "./DiseaseSearch.css"

import"https://clinicaltables.nlm.nih.gov/autocomplete-lhc-versions/17.0.2/autocomplete-lhc.min.js";
import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
import { Helmet } from "react-helmet";
import axios from "axios";
import DisplayData from "./DisplayData/DisplayData";
             

export default function DiseaseSearch()
{   
    const SearchDInput=useRef()
    const [dataJ,setdataJ]= useState([])
    const [notFound,setNotFound] = useState(false)
    const [isPending,startTransition] = useTransition()
    async function HandleSearchDisease(e) 
    {
       
        e.preventDefault()

       
        startTransition(()=>
        {

            const xhr=new XMLHttpRequest()
            xhr.open('GET','https://wsearch.nlm.nih.gov/ws/query?db=healthTopics&term='+SearchDInput.current.value,true);
            
            xhr.onload = ()=>{
            
              var data = xhr.responseXML.getElementsByTagName("document")
              var summary = xhr.responseXML.getElementsByName("FullSummary")
              var title = xhr.responseXML.getElementsByName("title")
              var sousTitle = xhr.responseXML.getElementsByName("altTitle")
              var url = xhr.responseXML.getElementsByTagName("document")
              var orgName = xhr.responseXML.getElementsByName("organizationName")
              var i=0
              var dataJson=[]
          for (let index = 0; index < data.length; index++) {
              // <DisplayData title={title[index]} sousTitle={sousTitle[index]} orgName={orgName[index]} url={url[index]} summary={summary[index]} />
      
              var j={}
              j.title=title[index].childNodes[0].nodeValue
              j.summary=summary[index].childNodes[0].nodeValue
              j.sousTitle=sousTitle[index].childNodes[0].nodeValue
              j.url=url[index].getAttribute("url")
              j.orgName=orgName[index].childNodes[0].nodeValue
              
              dataJson.push(j)
              
              
              
          }
            setdataJ(dataJson)
            dataJson.length==0 ? setNotFound(true) : setNotFound(false)
          
          
              
            }
            xhr.send();
        })
    }

    

    return(
        <>
            
            <div className="DiseaseSearch-container">
            
                <div className="DiseaseSearch-content">
                    <form onSubmit={HandleSearchDisease}>
                        <div className="row DiseaseSearch-title text-center">
                            <div className="col-12">
                                <h1>Disease Search</h1>
                            </div>
                        </div>
                        <div className="row DiseaseSearch-input">
                            
                            <input type="text" id="condition" className="form-control text-center" placeholder="search for Diesease Information " ref={SearchDInput} required></input>
                            
                            <Helmet>
                                    <script>    new Def.Autocompleter.Search('condition',
                                'https://clinicaltables.nlm.nih.gov/api/conditions/v3/search');</script>
                            </Helmet>           

                        </div>

                        <div className="row DiseaseSearch-btn">
                            <button type="button" className="btn btn-success" onClick={HandleSearchDisease}>Search</button>
                        </div>
                        <div className="getdata-container ">
                            {
                               isPending ? <div className="notfound-container">
                               <div className="row notfound-row">
                                   <div className="offset-3 col-6 d-flex justify-content-center">
                                       <div className="loading-picture "></div>
                                   </div>
                               </div>
                           </div> 
                           :
                            dataJ!=[] ? dataJ.map(item =>{
                                return <div className="row data-cards "> <div className="col-12 d-flex justify-content-center"> <DisplayData title={item.title} sousTitle={item.sousTitle} orgName={item.orgName} url={item.url} summary={item.summary}/> </div> </div>
                            })
                            :
                            null
                            }
                            {
                              notFound==true ? <div className="notfound-container">
                              <div className="row notfound-row">
                                  <div className="offset-lg-3 col-lg-6 col-12 d-flex justify-content-center">
                                      <div className="notfound-picture "></div>
                                  </div>
                              </div>
                          </div> :
                          null  
                            }
                            
                        </div>
                    </form>
                </div>
                
            </div>

            
        </>
    )
}
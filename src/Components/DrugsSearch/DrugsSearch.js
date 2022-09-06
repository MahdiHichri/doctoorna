import axios from 'axios'
import React, { useEffect, useRef, useState, useTransition } from 'react'
import NavBar from '../Acceuil/NavBar/NavBar'

import DisplayDrugInfo from './DisplayDrugInfo/DisplayDrugInfo'

import "./DrugsSearch.css"


export default function DrugsSearch() {
    const DrugsSearchBtn=useRef()
    const [drugs,setDrugs] = useState([])
    const [drugInput,setDrugInput]= useState("")
    const [suggestion,setSuggestion] = useState([])
    const [DrugsResults,setDrugsResults] = useState([])
    const [DrugsInfo,setDrugsInfo] = useState([])

    const [isPending,startTransition] = useTransition()


    const DrugSearchInput=useRef()


    useEffect(()=>
    {   
        const loadDrugs=async ()=>
        {
            const DrugsNames=await axios.get("https://rxnav.nlm.nih.gov/REST/RxTerms/allconcepts.json")
            setDrugs(DrugsNames.data.minConceptGroup.minConcept)
        }
        loadDrugs()
        
    },[])

   

    useEffect(()=>
    {
        const handleSuggestion = () =>
        {
            
            var matches = drugs.filter(drug => 
                {
                  
                    var drugName=drug.fullName.replace(/[`~!@#\[\]$%^&*()_|+\-=?;:'",.<>\{\}\\\/]/gi, '');
                    const regex= new RegExp(`${drugInput}`,"gi");
                    return drugName.match(regex)
                })
            
                setSuggestion(matches)
        }
        if(drugInput.length>3)
       { handleSuggestion()}
    },[drugInput])

    function collectData(item,index)
        {
            if (DrugsResults[index].purpose!=null) {
                for (let i = 0; i < DrugsResults[index].item.length; i++) 
                {
                    var x=DrugsResults[index].item.pop()
                    item.push(x)
                   
                    
                }
                
               
            }

            
        }

    function handleSearchDrugInfo(e)
    {
        e.preventDefault()
        setSuggestion([])
        if(drugInput.length>3)
        startTransition(()=>
        {
            DrugSearchInput.current.className="form-control text-center"
            const loadDrugsInfo=async ()=>
            {
    
                const DrugsInfo=await axios.get("https://api.fda.gov/drug/label.json?search="+drugInput+"&limit=1")
                setDrugsResults(DrugsInfo.data.results)
                
            }
            loadDrugsInfo()

        })
        else
        {
            DrugSearchInput.current.className="form-control text-center is-invalid"
        }      
       }

    useEffect(()=>
    {   
        if(DrugsResults.length!=0)
        getAllData()
    },[DrugsResults])

    function getAllData()
    {
        var purpose=[]
        var description=[]
        var ask_doctor=[]
        var ask_doctor_or_pharmacist=[]
        var do_not_use=[]
        var dosage_and_administration=[]
        var indications_and_usage=[]
        var keep_out_of_reach_of_children=[]
        var stop_use=[]
        var storage_and_handling=[]
        var when_using=[]
        var warnings=[]
        var boxed_warning=[]
        var dosage_and_administration_table=[]
        var dosage_forms_and_strengths=[]
        var overdosage=[]
        var general_precautions=[]
        var adverse_reactions=[]
        var pregnancy_or_breast_feeding=[]
        var nursing_mothers=[]
        var information_for_patients=[]
        var use_in_specific_populations=[]
        var precautions=[]
        
        
        var allData=[]
        

        for (let index = 0; index < DrugsResults.length; index++) 
        {
            
            // collectData(purpose,index)
            if (DrugsResults[index].purpose!=null) {
                for (let i = 0; i < DrugsResults[index].purpose.length; i++) 
                {
                    var x=DrugsResults[index].purpose.pop()
                    if(!purpose.includes(x))
                    purpose.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].precautions!=null) {
                for (let i = 0; i < DrugsResults[index].precautions.length; i++) 
                {
                    var x=DrugsResults[index].precautions.pop()
                    if(!precautions.includes(x))
                    precautions.push(x)
                   
                    
                }
                
               
            }

            if (DrugsResults[index].description!=null) {
                for (let i = 0; i < DrugsResults[index].description.length; i++) 
                {
                    var x=DrugsResults[index].description.pop()
                    if(!description.includes(x))
                    description.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].ask_doctor!=null) {
                for (let i = 0; i < DrugsResults[index].ask_doctor.length; i++) 
                {
                    var x=DrugsResults[index].ask_doctor.pop()
                    if(!ask_doctor.includes(x))
                    ask_doctor.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].ask_doctor_or_pharmacist!=null) {
                for (let i = 0; i < DrugsResults[index].ask_doctor_or_pharmacist.length; i++) 
                {
                    var x=DrugsResults[index].ask_doctor_or_pharmacist.pop()
                    if(!ask_doctor_or_pharmacist.includes(x))
                    ask_doctor_or_pharmacist.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].do_not_use!=null) {
                for (let i = 0; i < DrugsResults[index].do_not_use.length; i++) 
                {
                    var x=DrugsResults[index].do_not_use.pop()
                    if(!do_not_use.includes(x))
                    do_not_use.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].dosage_and_administration!=null) {
                for (let i = 0; i < DrugsResults[index].dosage_and_administration.length; i++) 
                {
                    var x=DrugsResults[index].dosage_and_administration.pop()
                    if(!dosage_and_administration.includes(x))
                    dosage_and_administration.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].indications_and_usage!=null) {
                for (let i = 0; i < DrugsResults[index].indications_and_usage.length; i++) 
                {
                    var x=DrugsResults[index].indications_and_usage.pop()
                    if(!indications_and_usage.includes(x))
                    indications_and_usage.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].keep_out_of_reach_of_children!=null) {
                for (let i = 0; i < DrugsResults[index].keep_out_of_reach_of_children.length; i++) 
                {
                    var x=DrugsResults[index].keep_out_of_reach_of_children.pop()
                    if(!keep_out_of_reach_of_children.includes(x))
                    keep_out_of_reach_of_children.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].stop_use!=null) {
                for (let i = 0; i < DrugsResults[index].stop_use.length; i++) 
                {
                    var x=DrugsResults[index].stop_use.pop()
                    if(!stop_use.includes(x))
                    stop_use.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].storage_and_handling!=null) {
                for (let i = 0; i < DrugsResults[index].storage_and_handling.length; i++) 
                {
                    var x=DrugsResults[index].storage_and_handling.pop()
                    if(!storage_and_handling.includes(x))
                    storage_and_handling.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].when_using!=null) {
                for (let i = 0; i < DrugsResults[index].when_using.length; i++) 
                {
                    var x=DrugsResults[index].when_using.pop()
                    if(!when_using.includes(x))
                    when_using.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].warnings!=null) {
                for (let i = 0; i < DrugsResults[index].warnings.length; i++) 
                {
                    var x=DrugsResults[index].warnings.pop()
                    if(!warnings.includes(x))
                    warnings.push(x)
                   
                    
                }
                
               
            } if (DrugsResults[index].boxed_warning!=null) {
                for (let i = 0; i < DrugsResults[index].boxed_warning.length; i++) 
                {
                    var x=DrugsResults[index].boxed_warning.pop()
                    if(!boxed_warning.includes(x))
                    boxed_warning.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].dosage_and_administration_table!=null) {
                for (let i = 0; i < DrugsResults[index].dosage_and_administration_table.length; i++) 
                {
                    var x=DrugsResults[index].dosage_and_administration_table.pop()
                    if(!dosage_and_administration_table.includes(x))
                    dosage_and_administration_table.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].dosage_forms_and_strengths!=null) {
                for (let i = 0; i < DrugsResults[index].dosage_forms_and_strengths.length; i++) 
                {
                    var x=DrugsResults[index].dosage_forms_and_strengths.pop()
                    if(!dosage_forms_and_strengths.includes(x))
                    dosage_forms_and_strengths.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].overdosage!=null) {
                for (let i = 0; i < DrugsResults[index].overdosage.length; i++) 
                {
                    var x=DrugsResults[index].overdosage.pop()
                    if(!overdosage.includes(x))
                    overdosage.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].general_precautions!=null) {
                for (let i = 0; i < DrugsResults[index].general_precautions.length; i++) 
                {
                    var x=DrugsResults[index].general_precautions.pop()
                    if(!general_precautions.includes(x))
                    general_precautions.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].adverse_reactions!=null) {
                for (let i = 0; i < DrugsResults[index].adverse_reactions.length; i++) 
                {
                    var x=DrugsResults[index].adverse_reactions.pop()
                    if(!adverse_reactions.includes(x))
                    adverse_reactions.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].pregnancy_or_breast_feeding!=null) {
                for (let i = 0; i < DrugsResults[index].pregnancy_or_breast_feeding.length; i++) 
                {
                    var x=DrugsResults[index].pregnancy_or_breast_feeding.pop()
                    if(!pregnancy_or_breast_feeding.includes(x))
                    pregnancy_or_breast_feeding.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index]. nursing_mothers!=null) {
                for (let i = 0; i < DrugsResults[index]. nursing_mothers.length; i++) 
                {
                    var x=DrugsResults[index]. nursing_mothers.pop()
                    if(!nursing_mothers.includes(x))
                    nursing_mothers.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].purinformation_for_patientspose!=null) {
                for (let i = 0; i < DrugsResults[index].information_for_patients.length; i++) 
                {
                    var x=DrugsResults[index].information_for_patients.pop()
                    if(!information_for_patients.includes(x))
                    information_for_patients.push(x)
                   
                    
                }
                
               
            }
            if (DrugsResults[index].use_in_specific_populations!=null) {
                for (let i = 0; i < DrugsResults[index].use_in_specific_populations.length; i++) 
                {
                    var x=DrugsResults[index].use_in_specific_populations.pop()
                    if(!use_in_specific_populations.includes(x))
                    use_in_specific_populations.push(x)
                   
                    
                }
                
               
            }
        


        }

            
        

        
        allData.push({"data":purpose,"title":"purpose"})
        allData.push({"data":description,"title":"description"})
        allData.push({"data":ask_doctor,"title":"ask_doctor"})
        allData.push({"data":ask_doctor_or_pharmacist,"title":"ask_doctor_or_pharmacist"})
        allData.push({"data":do_not_use,"title":"do_not_use"})
        allData.push({"data":dosage_and_administration,"title":"dosage_and_administration"})
        allData.push({"data":indications_and_usage,"title":"indications_and_usage"})
        allData.push({"data":keep_out_of_reach_of_children,"title":"keep_out_of_reach_of_children"})
        allData.push({"data":stop_use,"title":"stop_use"})
        allData.push({"data":storage_and_handling,"title":"storage_and_handling"})
        allData.push({"data":when_using,"title":"when_using"})
        allData.push({"data":warnings,"title":"warnings"})
        allData.push({"data":boxed_warning,"title":"boxed_warning"})
        allData.push({"data":precautions,"title":"precautions"})
        allData.push({"data":dosage_and_administration_table,"title":"dosage_and_administration_table"})
        allData.push({"data":dosage_forms_and_strengths,"title":"dosage_forms_and_strengths"})
        allData.push({"data":overdosage,"title":"overdosage"})
        allData.push({"data":general_precautions,"title":"general_precautions"})
        allData.push({"data":adverse_reactions,"title":"adverse_reactions"})
        allData.push({"data":pregnancy_or_breast_feeding,"title":"pregnancy_or_breast_feeding"})
        allData.push({"data":nursing_mothers,"title":"nursing_mothers"})
        allData.push({"data":information_for_patients,"title":"information_for_patients"})
        allData.push({"data":use_in_specific_populations,"title":"use_in_specific_populations"})

        setDrugsInfo(allData)
    }


  return (
    <>
    
    <div className='container-fluid'>
        <div className='DrugsSearch-container'>
            <div className='DrugsSearch-content'>
                <form onSubmit={handleSearchDrugInfo}>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='DrugsSearch-title text-center'>
                                <h1>Drugs Search</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex flex-column DiseaseSearch-input ">                   
                            <input type="text" id="condition" autoComplete='off' value={drugInput}  onChange={(e)=>{setDrugInput((e.target.value))}} className="form-control text-center"   placeholder="search for Drugs Information " required ref={DrugSearchInput}></input>         

                            <div className='row Drugs-names'>
                                
                                {
                                suggestion.map((item,index)=>{

                                    return <div key={index} className='drugs-Suggest-Names b-s' onClick={(e)=>{
                                      
                                        var drugName=e.target.innerText.replace(/[`~!@#\[\]$%^&*()_|+\-=?;:'",.<>\{\}\\\/]/gi, '');
                                        setDrugInput(drugName)}}>{item.fullName}</div>
                                })
                                }
                            </div>
                    </div>
                   
                        <div className="row DiseaseSearch-btn">
                            <button type="button" className="btn btn-success" onClick={handleSearchDrugInfo}>Search</button>
                        </div>
                </form>
                <div className='DrugsInfo-container'>
                    <div class="accordion" id="accordionExample">

                        {
                            
                            DrugsInfo.length!=0 ? DrugsInfo.map((item,index)=>
                            {
                                return item.data.length!=0 ? <DisplayDrugInfo key={index} title={item.title} data={item.data} i={index}/> : null
                            }
                            )
                            :
                            null
                        }
            
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

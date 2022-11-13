import axios from 'axios'
import React, { startTransition, useEffect, useRef, useState, useTransition } from 'react'
import { Topics } from './Data/Topics'
import "./Forum.css"
import LigneTopic from './ligneTopic/ligneTopic'
import NavbarForum from './navbarForum/navbarForum'
import ReactDOM from 'react-dom/client'
import TableTopics from './Tables/TableTopics'
import TablePostes from './Tables/TablePostes'
import CreatePost from './modal/createPost'
import ConsulterPost from './modal/consulterPost'
import { Toast } from 'react-bootstrap'



export default function Forum() {

    const bar = useRef()
    const Progress = useRef()

    const [isPending,startTransition]=useTransition()

    const [topics,setTopics]=useState([])
    const [prev,setPrev]=useState(0)
    const [next,setNext]=useState(20)
    const [filtredTopic,setFilterTopic]=useState([])
    const [posts,setPostes]=useState([])
    const [data,setData]=useState([])
    const [header,setHeader]=useState({
        "1":"Topics",
        "2":"nb posts",
    })
    const [postData,setPostData]=useState({})
    const [listResponse,setListResponse]=useState([])

        useEffect(()=>
        {
            setHeader({
                "1":"Topics",
                "2":"nb posts",
            })

                axios.get("http://localhost:3002/topic/")
                .then(res => {
                    setData(res.data.data)
                    setTopics(res.data.data)
                    
                })
        },[])

        function refresh() 
        {

        }

        function search(item)
        {
            setPrev(0)
            setNext(20)
            if(item.length>0)
            {   
                if(header[1]==="Topics")
                {
                var dataFiltred=topics.filter((elm)=>
                elm._id.toLowerCase().match(item.toLowerCase())
            )
                }
                else
                {
                    var dataFiltred=posts.filter((elm)=>
                    elm._id.toLowerCase().match(item.toLowerCase()))
                }
            if (dataFiltred.length>0) {
                setData(dataFiltred)
            }
                
            }
            else
            
            {
                setPrev(0)
                setNext(20)
                if(header[1]==="Topics")
                {
                    setHeader({
                        "1":"Topics",
                        "2":"nb posts",
                    })
                    setData(topics)
                    
                }
                else
                {
                    setData(posts)
                    setHeader({
                        "1":"Posts",
                        "2":"nb Responses",
                    })
                }
            }

        }

        function returnToTopic()
        {
            setHeader({
                "1":"Topics",
                "2":"nb posts",
            })
            setData(topics)
        }

        function checkPoste(Topic)
        {
            setPrev(0)
            setNext(20)
            setHeader({
                "1":"Posts",
                "2":"nb Responses",
            })
            axios.get("http://localhost:3002/post/topic/"+Topic.topic)
            .then((res)=>
            {
                setData(res.data.data)
                setPostes(res.data.data)
                
            })  

        }

        function handleSaveResponse(response)
        {
            axios.post("http://localhost:3002/response/create",{"description":response,
            "idPost":postData._id,"idDoctor":localStorage.getItem("username")}).then((res)=>{alert("response published")})
         
            axios.get("http://localhost:3002/response/"+postData._id)
            .then((res)=>
            {
                setListResponse(res.data.data)
                console.log(res.data.data);

            })
        }

        function consulterPost(Data)
        {
            axios.get("http://localhost:3002/post/"+Data.topic)
            .then(res =>
                {   
                    setPostData(res.data.data)
                    axios.get("http://localhost:3002/response/"+res.data.data._id)
                    .then((res)=>
                    {
                        setListResponse(res.data.data)
                       
                    })
                })
           
          document.getElementById("modal-consulterPost").click()
        }


        function getPostResponses()
        {
            axios.get("http://localhost:3002/response/"+postData._id)
            .then((res)=>
            {
                setListResponse(res.data.data)
            })
        }
        function barLoading()
        {

            bar.current.className="progress"
            setTimeout(()=>
            {
                Progress.current.className="progress-bar progress-bar-striped w-25"
                setTimeout(()=>
                {
                    Progress.current.className="progress-bar progress-bar-striped w-50"
                },1000)
                setTimeout(()=>
                {
                    Progress.current.className="progress-bar progress-bar-striped w-75"
                },1000)
                setTimeout(()=>
                {
                    Progress.current.className="progress-bar progress-bar-striped w-100"
                },1000)
                
            },3000)
            setTimeout(()=>
            {
                Progress.current.className="progress-bar progress-bar-striped w-0"
                bar.current.className="progress visually-hidden"
              

            },5000)
            
  
        }
       
  return (
    <>
  
    
    <a className='visually hidden' id="modal-consulterPost" data-bs-toggle="modal" data-bs-target="#modalConsulterPost"/>
    <div className='forum-container'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <div className='filter-forum d-flex flex-column'>
                        <NavbarForum f={returnToTopic} search={search} refresh={refresh}/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <div ref={bar} className="progress visually-hidden">
                    <div ref={Progress} className="progress-bar progress-bar-striped w-0" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='forum-content b-s'>
                        <div className='row'>
                            <div className='col'>
                                <div className='forum-table' id='forum-table'>                                
                                    
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th width="60%" scope="col">{header[1]}</th>
                                        <th width="5%" className='text-center' scope="col">{header[2]}</th>
                                        <th width="15%" className='text-center' scope="col">Date Creation</th>
                                        <th className='text-center' scope="col">Created By</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-topics'>
                                        {

                                                header[1]==="Topics" ?
                                                data.slice(prev,next).map((item,index)=>
                                                {   
                                                    return <LigneTopic key={index} type={"topic"} i={index+prev} topic={item._id} posts={item.posts} createdBy={item.createdBy} dateCreation={item.dateCreation} checkPoste={checkPoste} url={"http://localhost:3002/post/CountTopic/"} loading={barLoading}/>
                                                })
                                                :
                                                data.slice(prev,next).map((item,index)=>
                                                {
                                                    return <LigneTopic key={index} type={"post"} i={index+prev} topic={item._id} posts={item.Response} dateCreation={item.dateCreation} createdBy={item.idPatient} checkPoste={consulterPost} url={"http://localhost:3002/response/post/"} modalTarget={"#modalConsulterPost"} loading={barLoading}/>
                                                })

                                        }
                                    </tbody>
                                </table>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row '>
                            <div className='col'>
                               <div className='forum-prev-next-btns display-align-justify'>
                                         <a className='btn prevBtn'
                                         onClick={()=>
                                        {
                                          if(prev>0)
                                            {
                                                setPrev(prev-20) 
                                                setNext(next-20)
                                            }
                                        }}
                                         >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                                         </svg>   
                                         </a>      
                                       {  data.length===0 ?
                                                <div className="spinner-grow text-success" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                              </div>
                                              :<></>}
                                         <a className='btn nextBtn'
                                         onClick={()=>
                                        {
                                          if(next<data.length-20) 
                                             {
                                                setPrev(prev+20) 
                                                setNext(next+20)
                                             }
                                        }}
                                         >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                         <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                         </svg>   
                                         </a>   
                                </div>                     
                            </div>
                        </div>
        </div>
    </div>
    <CreatePost />
    <ConsulterPost handleSaveResponse={handleSaveResponse} listResponse={listResponse} createdBy={postData.idPatient} topic={postData.idTopic} dateCreation={postData.dateCreation} postTitle={postData._id} description={postData.description}/>
    </>
  )
}

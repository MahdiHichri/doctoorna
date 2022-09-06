import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import "./ligneTopic.css"

export default function LigneTopic(props) {
  
  const trClassName = useRef()

  const [nbPoste,setNbPoste]=useState(0)
  const [nbResponse,setNbResponse]=useState(0)
  
    if(props.type==="topic")
    {
          axios.get(props.url+props.topic)
          .then(res => 
              {
                  if(res.data.response==="success")
                  {
                      setNbPoste(res.data.data)
                  }
              }) 
    } 
        else
        {
          axios.get(props.url+props.topic)
        .then(res => 
        {
            if(res.data.response==="success")
            {
                setNbPoste(res.data.data)
            }
        })
        }
  return (
    <tr ref={trClassName}>
        <th scope="row">{props.i}</th>
        <td><a href='' 
        onClick={(e)=>
          {
            e.preventDefault();
            
            props.loading()
            setTimeout(()=>props.checkPoste(props),5000)
            
          }
          }>{props.topic}</a></td>
        <td className='text-center' >{nbPoste}</td>
        <td className='text-center' >{props.dateCreation}</td>
        <td className='text-center' >{props.createdBy}</td>
    </tr>
  )
}

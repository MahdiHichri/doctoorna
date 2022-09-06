import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Topics(props) {
  const [topic,setTopic]=useState([])

  useEffect(()=>
  {
      axios.get("http://localhost:3002/topic/")
      .then(res => {
          setTopic(res.data.data)
          
      })
  },[])

      return (
    <div className='d-flex flex-column justify-content-center'>
  <input className='form-control' list="browsers" name="browser" id="browser" onChange={(e)=>props.search(e.target.value)}/>
  <datalist id="browsers">
    {
        topic.map((item,index)=>{return <option key={index} value={item._id}></option>} )
    }
    </datalist>
    </div>

  )
}

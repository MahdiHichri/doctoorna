import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function TopicsModal(props) {
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
  <input className='form-control' required onChange={(e)=>{props.getData(e.target.value)}} list="browsers" name="browser" id="browser"/>
  <datalist id="browsers">
    {
        topic.map((item,index)=>{return <option key={index} value={item._id}></option>} )
    }
    </datalist>
    </div>

  )
}
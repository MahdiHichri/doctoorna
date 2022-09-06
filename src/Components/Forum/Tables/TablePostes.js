import React, { useEffect } from 'react'
import LigneTopic from '../ligneTopic/ligneTopic';

export default function TablePostes(props) {
  return (
    <table className="table table-bordered">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th width="60%" scope="col">Title</th>
        <th width="5%" className='text-center' scope="col">Response</th>
        <th width="15%" className='text-center' scope="col">Date Creation</th>
        <th className='text-center' scope="col">Created By</th>
        </tr>
    </thead>
    <tbody className='table-topics'>
        {

    
                props.data.map((item,index)=>
                {
                    return  <h1>{item._id}</h1>
                })


        }
    </tbody>
</table>
  )
}

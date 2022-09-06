import React from 'react'
import LigneTopic from '../ligneTopic/ligneTopic'

export default function TableTopics(props) {

     
  return (
    <table className="table table-bordered">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th width="60%" scope="col">Topics</th>
        <th width="5%" className='text-center' scope="col">Posts</th>
        <th width="15%" className='text-center' scope="col">Date Creation</th>
        <th className='text-center' scope="col">Created By</th>
        </tr>
    </thead>
    <tbody className='table-topics'>
        {
            props.data.slice(props.prev,props.next).map((item,index)=>
            {
                return <LigneTopic key={index} i={index+props.prev} topic={item._id} posts={item.posts} dateCreation={item.dateCreation} createdBy={item.createdBy} checkPoste={props.f} />
            })
        }
    </tbody>
</table>
  )
}

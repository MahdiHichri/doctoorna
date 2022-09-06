import React from "react";

export default function CardResponse(props) {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card card-consulterPost mb-3'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src='https://i.pinimg.com/originals/11/df/2b/11df2bc889722dab6946142dc9c70151.gif'
                className='img-fluid rounded-start'
                alt='...'
                style={{height:"20vh"}}
              />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title b-'><strong>{props.username}</strong></h5>
                <p className='card-text'>
                  {props.description}
                </p>
                <p className='card-text'>
                  <small className='text-muted'>{props.dateCreation}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

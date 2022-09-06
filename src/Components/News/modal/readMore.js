import React, { useEffect } from "react";
import "./readMore.css";

export default function ReadMore(props) {
  var background = props.data.urlToImage;

  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='{-1}'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-xl modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title text-center' id='exampleModalLabel'>
              {props.data.title}
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div
                    className='readMore-pic'
                    style={{ backgroundImage: `url(${background})` }}
                  ></div>
                </div>
                <div className=' col-lg-8'>
                  <div className='readMore-content b-s'>
                    <div className='container-fluid'>
                      <div className='row readMore-row'>
                        <div className='col-12'>
                          <div className='readMore-published'>
                            <p>
                              Published: <strong>{props.data.author}</strong> ,{" "}
                              {props.data.publishedAt}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='row readMore-row'>
                        <div className='col-12'>
                          <div className='readMore-description'>
                            <h5>
                              <strong>description:</strong>
                            </h5>
                            <p>{props.data.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className='row readMore-row'>
                        <div className='col-12'>
                          <div className='readMore-contents'>
                            <h5>
                              <strong>content:</strong>
                            </h5>
                            {props.data.content}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <a
              target='_blanc'
              href={props.data.url}
              id='readMore-button'
              className='btn btn-success'
            >
              check
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

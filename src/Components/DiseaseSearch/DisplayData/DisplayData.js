import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

import "./DisplayData.css";

export default function DisplayData(props) {
  return (
    <>
      <div className='card text-center w-75 jta'>
        <div className='card-header'>
          <h2
            dangerouslySetInnerHTML={{
              __html: props.title,
            }}
          ></h2>
        </div>
        <div className='card-body'>
          <strong>
            {" "}
            <h5
              className='card-title text-primary'
              dangerouslySetInnerHTML={{
                __html: props.sousTitle,
              }}
            ></h5>
          </strong>
          <p
            className='card-text jta'
            dangerouslySetInnerHTML={{
              __html: props.summary,
            }}
          ></p>
          <a
            href={props.url}
            target='_blanc'
            className='btn btn-outline-primary'
          >
            Read More
          </a>
        </div>
        <div
          className='card-footer text-muted'
          dangerouslySetInnerHTML={{
            __html: props.orgName,
          }}
        ></div>
      </div>
    </>
  );
}

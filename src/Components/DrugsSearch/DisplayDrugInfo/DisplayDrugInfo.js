import React, { useEffect } from "react";

import "./DisplayDrugInfo.css";

export default function DisplayDrugInfo(props) {
  var i = props.i;
  var id = "heading" + i;
  var x = "#collapse" + i;
  var y = "collapse" + i;

  useEffect(() => {
    var tables = document.querySelectorAll("table");
    for (let i = 0; i < tables.length; i++) {
      tables[i].className = "table table-striped table-bordered table-success";
      tables[i].border = "3";
    }
  }, []);

  return (
    <div className='accordion-item d-flex flex-column'>
      <h2 className='accordion-header' id={id}>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={x}
          aria-expanded='true'
          aria-controls={y}
        >
          {props.title}
        </button>
      </h2>
      <div
        id={y}
        className='accordion-collapse collapse show'
        aria-labelledby={id}
        data-bs-parent='#accordionExample'
      >
        <div className='accordion-body'>
          <ul>
            {props.data.map((item, index) => {
              if (item.indexOf("<table") == 0)
                return (
                  <li
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                  ></li>
                );
              else return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

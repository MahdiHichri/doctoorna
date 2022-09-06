import React from "react";

import FirstSection from "./FirstSection/FirstSection";

import "./Acceuil.css";

var SectionId = 1;

function inrementSectionId() {
  SectionId = SectionId + 1;
  return "#Section" + SectionId;
}

export default function Acceuil() {
  var href = "#Section" + SectionId;

  return (
    <div className='Acceuil'>
      <section id='Section1' className='First-Section'>
        <FirstSection />
        <a onClick={inrementSectionId} href={inrementSectionId()}>
          <div className='scroll-down'></div>
        </a>
      </section>
    </div>
  );
}

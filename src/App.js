import logo from './logo.svg';
import './App.css';
import Acceuil from './Components/Acceuil/Acceuil';
import SignUpDoctor from './Components/Acceuil/FirstSection/Modal/SignUpDoctor';

import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import SignUpPharmacist from './Components/Acceuil/FirstSection/Modal/SignUpAsPharmacist';

import BMI from './Components/BMI/BMI';
import DiseaseSearch from './Components/DiseaseSearch/DiseaseSearch';
import DisplayData from './Components/DiseaseSearch/DisplayData/DisplayData';
import HomePage from './Components/SymptomChecker/HomePage';
import News from "./Components/News/news"
import ReadMore from './Components/News/modal/readMore';
import DrugsSearch from './Components/DrugsSearch/DrugsSearch';
import NavBar from './Components/Acceuil/NavBar/NavBar';
import { useRef, useState } from 'react';
import Forum from './Components/Forum/Forum';
import Profile from './Components/Profile/Profile';
import SignUpAsDoctor from './Components/Acceuil/FirstSection/Modal/SignUpAsDoctor';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
        {/* <Acceuil /> */}
        {/* <SignUpDoctor /> */}
     
        <Router>
        <NavBar/>
          <Routes>
          
          <Route path='/' element={<Acceuil />} />
          <Route path='SignUpAsDoctor' element={<SignUpAsDoctor />} />
          <Route path='/News' element={<News />} />
          <Route path='/BMIC' element={<BMI />} />
          <Route path='/SC' element={<HomePage />} />
          <Route path='/DS' element={<DiseaseSearch />} />
          <Route path='/DGS' element={<DrugsSearch />} />
          <Route path='/Forum' element={<Forum />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} >
          
          
          </Route>
          </Routes>
          
        </Router>


    
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button> */}
       {/* <DisplayData title="salem" sousTitle="ggg" orgName="fff" url="pppp" summary="ggggggggggggggggggggggggggggggggg" /> */}


        
    </div>
  );
}

export default App;

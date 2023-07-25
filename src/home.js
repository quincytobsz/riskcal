import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import labImage from './imgs/lab.jpg';
import nonLabImage from './imgs/non lab.jpg';
import labs from './Componets/pages/lab';
import nonlabs from './Componets/pages/nonlab';

function home() {
  return (
    <div>
    <Router>
        <div className='image-container img'>
          <div className='img1'>
            <Route path="/labs" component={labs} />
            <img src={labImage} alt="Lab" />
          </div>
          <div className='img2'>
            <Route path="/nonlabs" component={nonlabs} />
            <img src={nonLabImage} alt="Non Lab" />
          </div>
        </div>
      </Router>
    </div>
  );

}

export default home;
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import labImage from './imgs/lab.png';
import nonLabImage from './imgs/non lab.png';
import labs from './Componets/pages/lab';
import nonlabs from './Componets/pages/nonlab';

const App = () => {
  return (
    <div>
      <h1>WHO Risk Calculator</h1>
      <Router>
        <div className='img'>
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

export default App;

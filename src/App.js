import React from 'react';
import './App.css';
import image1 from'./imgs/lab.jpg';
import image2 from'./imgs/non lab.jpg';
import { Link } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WHO Risk Calculator</h1>
      </header>
      <div className='link-container'>
      <Link className='link-container a' to='src/Componets/pages/lab.js'>
          lab
        </Link>
        
        <Link className='link-container a' to='./Componets/pages/nonlab.js'>
          nonlab
        </Link>
        </div>
        <div className='image-container'>
        <img src={image1} alt="lab" />
      <img src={image2} alt="nonlab" />
        </div>
        
    </div>
    
  );
}

export default App;
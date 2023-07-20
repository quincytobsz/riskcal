import React from 'react';
import './App.css';
import './HomeItems';
import './Componets/pages/lab'
import './Componets/pages/nonlab'
import img1 from './imgs/lab.png';
import img2 from './imgs/non lab.png';
import labs from './Componets/pages/lab';


function App() {
  return (
    <main>
      <h2>Risk Calculators</h2>
    <section className='home__container'>
 <div className='home__wrapper'>
    <li className='home__items'>
        <home_item/>
         < img src={img1} alt=""/>
         <link 
        to= 'src/components/pages/labs.js'
        className='home_items'
        onClick={labs}>
       </link>
        
        <home_item/>
        < img src={img2} alt=""
        path='src/Componets/pages/nonlabs.js'/>
        </li>
   </div>
   </section>  
    </main>
  );
}

export default App;

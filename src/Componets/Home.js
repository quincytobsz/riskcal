import React from "react";
import '../App.css';
import homeitem from "../HomeItems";
import img1 from '../imgs/lab.PNG'
import img2 from '../imgs/non lab.PNG'

function home()
{
    return (
        <div className="home">
        <div className='home__container'>
     <div className='home__wrapper'>
        <ul className='home__items'>
            <homeitem
            img src={img1} alt=""
            path='labs'
            />
              <homeitem
            img src={img2} alt=""
            path='nonlabs'
            />
            </ul>
        </div>
     </div> 
  </div>
    )

}

export default home;
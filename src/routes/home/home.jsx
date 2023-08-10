import React from "react";
import Bar from '../../components/bar/bar';
import './home.css';


function Home() {
    return (
        <div id="home-page">
            <Bar heading="WHO Risk Calculator"/>
            <div className='image-container'>
                <div className="box-container">
                    <a href="/lab"><img src='/images/lab.jpg' alt="lab" /></a>
                </div>
                <div className="box-container">
                    <a href="/nonlab"><img src='/images/non lab.jpg' alt="nonlab" /></a>
                </div>  
            </div>

        </div>
    );
}

export default Home;
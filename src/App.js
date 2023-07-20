import React from 'react';
import home from './Componets/home';
import { Route } from 'react-router-dom';


const App = () => {
  return (
     <Route path='home' component={home}/>
    
       
  );
}

export default App;

import './App.css';
import {BrowserRouter, Route,  Routes} from 'react-router-dom';
import Home from './routes/home/home';
import Lab from './routes/lab/lab';
import Nonlab from './routes/nonlab/nonlab';
import BMI from './routes/bmi/bmi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path ='/lab' element = {<Lab />}/>
        <Route path ='/nonlab' element = {<Nonlab />}/>
        <Route path ='/bmi' element = {<BMI />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

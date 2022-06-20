import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import{BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { formatCountdown } from 'antd/lib/statistic/utils';
import Home from './pages/Home';
import Test from './pages/Test'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <div className="App">

    <Router>
    
        <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        
        </Routes>
    
    </Router>
      
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from './Layout'  
import Home from './Home';
import About from './About';
import Plastic from './Plastic';
import Add from './Add';
import ReadMore from './ReadMore';
import Update from './Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    
    <Route path="/" element={< Layout />} >
    <Route index element={<Home />} />
    <Route path='/home' element={<Home/>} />
    <Route path='/About' element={< About/>} />
    <Route path='/Plastic' element={< Plastic />}/>
    <Route path='/Plastic/:id' element={<ReadMore />} />
    <Route path='/Add' element={<Add/>}/>
    <Route path='/Update/:id' element={< Update/>}/>
    </Route>

  </Routes>
  </BrowserRouter>
);



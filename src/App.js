
import React from 'react';
import Invalid from './invalid'
import Home from './home'
import Subpage from './subpage'
import SubpageProp from './subpage-prop'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <BrowserRouter>
      <div className="mainpage">
        <Header />

        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='subpage' element={<Subpage />} >

              <Route path=':id' element={<SubpageProp />} />
              <Route path='*' element={<Invalid />} />

            </Route>

            <Route path='*' element={<Invalid />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}
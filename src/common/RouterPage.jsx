import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, About, About2, Contact, Blog, Service1, Service2, Service3 } from '../pages';

function RouterPage() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about2" element={<About2 />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/blog" element={<Blog />} />     
      <Route path="/service1" element={<Service1 />}/>
      <Route path="/service2" element={<Service2 />}/>
      <Route path="/service3" element={<Service3 />}/>
    </Routes> 
    </>
  )
}
export default RouterPage
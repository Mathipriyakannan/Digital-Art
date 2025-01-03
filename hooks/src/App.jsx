import React from "react";
import Login from "./Login";
import "./ImageGallery.css";
import "./Login.css";
import ImageGallery from "./ImageGallery"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 function App() {
  return(
<div>

<Router>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/ImageGallery' element={<ImageGallery/>} />

  </Routes>
</Router>




</div>
  )
 }
 export default App;
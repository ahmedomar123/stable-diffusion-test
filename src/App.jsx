import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Home from './pages/Home';
import Ecosystem from './pages/Ecosystem';
import Extensions from './pages/Extensions';
import Error from './components/Error';
import "./App.scss"

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} /> 
        <Route path="/extensions" element={<Extensions />} /> 
        <Route path="/*" element={<Error />} /> 
      </Routes>
    </Router>
  )
}

export default App
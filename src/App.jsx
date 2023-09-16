import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import Contacts from './pages/contacts'


function App() {
  return (
    <Routes>
      <Route path='/portfolio' Component={ Home } />
      <Route exact path='/contatos' Component={ Contacts } />
    </Routes>
  )
}

export default App

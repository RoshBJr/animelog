import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListeDesAnimes from './components/ListeDesAnimes';
import MyListDesAnimes from './components/MyListDesAnimes';
import './components/css/color.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import ListeDesAnimes from './components/ListeDesAnimes';
import MyListDesAnimes from './components/MyListDesAnimes';
import './components/css/color.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
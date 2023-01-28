import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListeDesAnimes from './components/ListeDesAnimes';
import './components/css/color.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ListeDesAnimes/>
    </div>
  );
}

export default App;

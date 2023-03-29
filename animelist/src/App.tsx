import React, { useEffect } from 'react';
import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import ListOfAnimes from './components/ListOfAnimes';
import data from './json/ghibli.json';

const jsonData:any[] = [];

data.films.map(
  serie => {
    jsonData.push(
    {
      id: serie.id,
      title: serie.original_title,
      img: serie.image,
      status: "none",
      showStatus: ["add"],
      numEpisodes: 1
    })
  }
)

function App() {

  const item = localStorage.getItem("anime-list-ls");
  const [list, setList] = useState(
    item ? JSON.parse(item): jsonData)
  
  useEffect( () => {
    localStorage.setItem("anime-list-ls", JSON.stringify(list));
    // console.log(list);
  },[list])

  return (
    <div className="App">
      <Header/>
      <ListOfAnimes
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
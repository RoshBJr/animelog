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
      title: serie.title,
      img: serie.image,
      status: "none",
      showStatus: ["add"],
      numEpisodes: 1
    })
  }
)

function App() {
  
  // useful for responsive development

  // window.addEventListener("resize", () => {
  //  console.log(window.innerWidth);
  // })
  
  const item:any = localStorage.getItem("anime-list-ls");
  const [myList, setMyList] = useState([]);
  const [myListActive, setMyListActive] = useState(false);
  const [list, setList] = useState(
    item ? JSON.parse(item): jsonData)
    
    useEffect( () => {
      if(!myListActive) {
        localStorage.setItem("anime-list-ls", JSON.stringify(list));
      }
    },[list])
    
    function filterUserList() {
      setMyListActive(true);

      setList(
        list.filter(
          (serie: { showStatus: string[]; }) => {
            if(serie.showStatus[0] === "added") {
              return(serie);
            }
          }
        )
      )
    }

    function filterHomeList() {
      setMyListActive(false);
      setList(JSON.parse(item));
    }

  return (
    <div className="App">
      <Header list={list} filterUserList={filterUserList} filterHomeList={filterHomeList} />
      <ListOfAnimes
        myListActive={myListActive}
        list={list}
        setList={setList}
      />
    </div>
  );
}

export default App;
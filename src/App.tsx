import React, { useEffect } from 'react';
import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import ListOfAnimes from './components/ListOfAnimes';
import data from './json/ghibli.json';
import userList from './lib/FilterUserList';
import statusFilterList from './lib/StatusFilterList';

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

  const [statusG, setStatusG] = useState("Watching");
  let item:any = localStorage.getItem("anime-list-ls");
  const [myListTemp, setMyListTemp] = useState([]);
  const [myListActive, setMyListActive] = useState(false);
  const [list, setList] = useState(
    item ? JSON.parse(item): jsonData)
    
    useEffect( () => {
      if(!myListActive) {
        localStorage.setItem("anime-list-ls", JSON.stringify(list));
        setMyListTemp(list);
      }
    },[list])
    
    useEffect(() => {
      item = localStorage.getItem("anime-list-ls");
    }, [myListTemp, list])

    useEffect( () => {
      if(myListActive) {
        setList(myListTemp);
        localStorage.setItem("anime-list-ls", JSON.stringify(myListTemp));
        filterUserList();
      }
    }, [myListTemp])

    useEffect(() => {
      if(myListActive) {
        filterMyList(statusG);
      } else {
        filterHomeList();
      }
    }, [myListActive])


    function filterUserList() {userList({setMyListActive,setList, list});}

    function filterMyList(statusText:string) {statusFilterList({setStatusG, myListActive, setList, item,statusText});}

    function filterHomeList() {
      setMyListActive(false);
      setList(JSON.parse(item));
    }

  return (
    <div className="App">
      <Header
        filterUserList={filterUserList}
        filterHomeList={filterHomeList} />

      <ListOfAnimes
        listTemp={myListTemp}
        setListTemp={setMyListTemp}
        statusG={statusG}
        myListActive={myListActive}
        list={list}
        setList={setList}
        filterMyListG={filterMyList}
        filterAll={filterUserList}
      />
    </div>
  );
}

export default App;
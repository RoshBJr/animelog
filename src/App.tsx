import React, { useEffect } from 'react';
import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import ListOfAnimes from './components/ListOfAnimes';
// import data from './json/ghibli.json';
import userList from './lib/FilterUserList';
import statusFilterList from './lib/StatusFilterList';
import {url, options} from './lib/fetchAnimeAPI';

const jsonData:any = [];


// data.films.map(
//   (          serie: { id: string; title: any; image: any; }) => {
//     jsonData.push(
//     {
//       bgColor: "unAdded",
//       id: serie.id,
//       title: serie.title,
//       img: serie.image,
//       status: "none",
//       showStatus: ["add"],
//       numEpisodes: 1
//     })
//   }
// )


function App() {
  // useful for responsive development
  // window.addEventListener("resize", () => {
  //  console.log(window.innerWidth);
  // })

const [apiData, setApiData] = useState([]);

const fetchData:any = async () => {
  const response:any = await fetch(url, options);
  const theData = await response.json();
  
  theData['data']?.Page.media.map(
    (          serie: { id: number; title: string; coverImage: string; }) => {
      jsonData.push(
      {
        bgColor: "unAdded",
        id: serie.id,
        title: serie.title['english'],
        img: serie.coverImage['extraLarge'],
        status: "none",
        showStatus: ["add"],
        numEpisodes: 1
      })
    }
  )
  setApiData(jsonData);
  // setList(jsonData);
  // return jsonData;

} 
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {if(!item){setList(apiData)}} ,[apiData] );
  

  const [statusG, setStatusG] = useState("All");
  let item:any = localStorage.getItem("anime-list-ls");
  const [myListTemp, setMyListTemp] = useState([]);
  const [myListActive, setMyListActive] = useState(false);
  const [list, setList] = useState(
    item ? JSON.parse(item): []);
    
    useEffect(() => {
          if(myListActive) filterMyList(statusG);
    },[localStorage.getItem("anime-list-ls")])
    
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
        localStorage.setItem("anime-list-ls", JSON.stringify(myListTemp));
        setList(myListTemp);
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
      />
    </div>
  );
}

export default App;
import './ListOfAnimes.scss';
import data from '../json/ghibli.json';
import SingleAnime from './SingleAnime';
import logo from '../images/cinema.svg';
import StatusFilter from './UI/StatusFilter';
import { useState } from 'react';

interface UIProps {
    list:any[];
    setList:Function;
    myListActive: boolean;
    statusG:string;
    filterMyListG:Function;
    listTemp:any[];
    setListTemp:Function;
}

export default function ListOfAnimes({listTemp,setListTemp,filterMyListG, statusG, list, setList, myListActive}:UIProps) {
    
    const [bgColor, setBgColor] = useState("unAdded");

    return (
        myListActive && list.length == 0 
        ?
        <div className="containerMyListVide">
            <StatusFilter
                myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
                
            <h1>Silence is bliss</h1>
            <img src={logo} alt="cinema" />
        </div>
        :
        <div className="containerAnimes">
            {myListActive ?
                <StatusFilter
                myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
                :
                <></>
            }
            {
                list.map(
                    singleAnime =>
                        <SingleAnime
                            bgColor={singleAnime.bgColor}
                            setBgColor={setBgColor}
                            listTemp={listTemp}
                            setListTemp={setListTemp}
                            statusG={statusG}
                            key={singleAnime.id}
                            id={singleAnime.id}
                            img={singleAnime.img}
                            title={singleAnime.title}
                            status={singleAnime.showStatus}
                            currentEp={singleAnime.currentEpisode}
                            totalEp={singleAnime.numEpisodes}
                            list={list}
                            setList={setList}
                            myListActive={myListActive}
                            statusText={singleAnime.status}
                            filterMyListG={filterMyListG}
                        />
                )
            }
        </div>
    );
}
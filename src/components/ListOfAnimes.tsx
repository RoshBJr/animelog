import './ListOfAnimes.scss';
import data from '../json/ghibli.json';
import SingleAnime from './SingleAnime';
import { useState } from 'react';
import logo from '../images/cinema.svg';
import StatusFilter from './UI/StatusFilter';

interface UIProps {
    list:any[];
    setList:Function;
    myListActive: boolean;
    statusG:string;
    filterMyListG:Function;
}

export default function ListOfAnimes({filterMyListG, statusG, list, setList, myListActive}:UIProps) {

    return (
        myListActive && list.length == 0 
        ?
        <div className="containerMyListVide">
            <StatusFilter
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
                
            <h1>Silence is bliss</h1>
            <img src={logo} alt="cinema" />
        </div>
        :
        <div className="containerAnimes">
            <StatusFilter
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
            {
                list.map(
                    singleAnime =>
                        <SingleAnime
                            statusG={statusG}
                            key={singleAnime.id}
                            id={singleAnime.id}
                            img={singleAnime.img}
                            title={singleAnime.title}
                            status={singleAnime.showStatus}
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
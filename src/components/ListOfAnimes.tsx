import './ListOfAnimes.scss';
import data from '../json/ghibli.json';
import SingleAnime from './SingleAnime';
import { useState } from 'react';
import logo from '../images/cinema.svg';

interface UIProps {
    list:any[];
    setList:Function;
    myListActive: boolean;
}

export default function ListOfAnimes({list, setList, myListActive}:UIProps) {

    return (
        myListActive && list.length == 0 ?
        <div className="containerMyListVide">
            <h1>Silence is bliss</h1>
            <img src={logo} alt="cinema" />
        </div>
        :
        <div className="containerAnimes">
            {
                list.map(
                    singleAnime =>
                        <SingleAnime
                            key={singleAnime.id}
                            id={singleAnime.id}
                            img={singleAnime.img}
                            title={singleAnime.title}
                            status={singleAnime.showStatus}
                            list={list}
                            setList={setList}
                            myListActive={myListActive}
                            statusText={singleAnime.status}
                        />
                )
            }
        </div>
    );
}
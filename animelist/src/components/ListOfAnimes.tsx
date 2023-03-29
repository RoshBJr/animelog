import './ListOfAnimes.scss';
import data from '../json/ghibli.json';
import SingleAnime from './SingleAnime';
import { useState } from 'react';

interface UIProps {
    list:any[];
    setList:Function;
}

export default function ListOfAnimes({list, setList}:UIProps) {

    return (
        <div className="containerAnimes">
            {
                list.map(
                    singleAnime =>
                        <SingleAnime
                            key={singleAnime.id}
                            id={singleAnime.id}
                            img={singleAnime.img}
                            title={singleAnime.title}
                            statusText={singleAnime.showStatus}
                            list={list}
                            setList={setList}
                        />
                )
            }
        </div>
    );
}
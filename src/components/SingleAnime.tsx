import { useEffect, useState } from 'react';
import './SingleAnime.scss';
import StatusFilter from './UI/StatusFilter';
import modifyAnimePropsLs from '../lib/addAnimeToLS';
import EpisodeCounter from './UI/EpisodeCounter';

interface UIProps {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
    status:string[];
    statusText:string;
    myListActive:boolean;
    statusG:string;
    filterMyListG:Function;
    listTemp:any[];
    setListTemp:Function;
    bgColor:string;
    setBgColor:Function;
    currentEp:number;
    totalEp:number;
}

export default function SingleAnime({currentEp, totalEp,setBgColor,bgColor,listTemp,setListTemp,filterMyListG, statusG, id, img, title, status, statusText, list, setList, myListActive}:UIProps) {

    function addToLs() {
        modifyAnimePropsLs({setList,list,id,title,img, bgColor, setBgColor});
    }

    function episodePlus() {
        
    }

    // console.log(currentEp);
    return(
        myListActive ?
        // My list 
        <div className={`singleAnimeMyList le${id}`}>
            < EpisodeCounter
                episodePlus={episodePlus}
                id={id}
                list={listTemp}
                setList={setListTemp}
                currentEp={currentEp}
                totalEp={totalEp}
            />

            <StatusFilter
                myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                statusToShow={statusText}
                id={id}
                list={list}
                setList={setList} />

            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
            </div>
        </div>
        :
        // Home list
        <div className="singleAnime">
            <span
                onClick={addToLs}
                className={`status ${bgColor}`}>{status[0]}
            </span>
            <StatusFilter
                myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                statusToShow={statusText}
                id={id}
                list={list}
                setList={setList} />

            <img src={img} alt={title}/>
            
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
            </div>
        </div>

    );
}
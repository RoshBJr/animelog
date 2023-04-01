import { useState } from 'react';
import './SingleAnime.scss';
import StatusFilter from './UI/StatusFilter';
import modifyAnimePropsLs from '../lib/addAnimeToLS';

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
}

export default function SingleAnime({listTemp,setListTemp,filterMyListG, statusG, id, img, title, status, statusText, list, setList, myListActive}:UIProps) {
    
    function addToLs() {
        modifyAnimePropsLs({setList,list,id,title,img});
    }

    return(
        myListActive ? 
        <div className={`singleAnimeMyList le${id}`}>
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
        <div className="singleAnime">
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
                <span
                    onClick={addToLs}
                    className="status">{status[0]}
                </span>
            </div>
        </div>

    );
}
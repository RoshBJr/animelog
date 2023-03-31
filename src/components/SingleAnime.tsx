import { useState } from 'react';
import './SingleAnime.scss';
import StatusFilter from './UI/StatusFilter';

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
}

export default function SingleAnime({filterMyListG, statusG, id, img, title, status, statusText, list, setList, myListActive}:UIProps) {
    
    function addToLs() {
        setList(
            list.map(
                single => {
                    if(single.id === id && single.showStatus[0] === "add") {
                        return(
                            {
                                id: id,
                                title: title,
                                img: img,
                                status: "Watching",
                                showStatus: ["added"],
                                numEpisodes: 1
                            }
                        );
                    }
                    else if(single.id === id && single.showStatus[0] === "added") {
                        return(
                            {
                                id: id,
                                title: title,
                                img: img,
                                status: "none",
                                showStatus: ["add"],
                                numEpisodes: 1
                            }
                        );
                    }
                    return single;
                }
            )
        )
    }

    return(
        myListActive ? 
        <div className="singleAnimeMyList">
            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
            </div>
        </div>
        :
        <div className="singleAnime">
            <StatusFilter
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
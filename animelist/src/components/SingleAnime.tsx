import { useState } from 'react';
import './SingleAnime.scss';

interface UIProps {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
    statusText:string[];
    myListActive:boolean;
}

export default function SingleAnime({id, img, title, statusText, list, setList, myListActive}:UIProps) {
    
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
                                status: "none",
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
        <div className="singleAnime">
            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
            </div>
        </div>
        :
        <div className="singleAnimeMyList">
            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
                <span onClick={addToLs} className="status">{statusText[0]}</span>
            </div>
        </div>

    );
}
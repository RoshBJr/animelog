import { useState } from 'react';
import './SingleAnime.scss';

interface UIProps {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
    statusText:string[];
}

export default function SingleAnime({id, img, title, statusText, list, setList}:UIProps) {
    
    function addToLs() {
        setList(
            list.map(
                single => {
                    if(single.id === id) {
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
                    return single;
                }
            )
        )
        console.log(statusText[0]);
    }

    return(
        <div className="singleAnime">
            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
                <span onClick={addToLs} className="status">{statusText[0]}</span>
            </div>
        </div>
    );
}
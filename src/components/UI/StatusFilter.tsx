import { useEffect, useState } from 'react';
import './StatusFilter.scss';

interface UIProps {
    list:any[];
    setList:Function;
    id?:string;
    statusToShow?:string
    statusG:string;
    filterMyListG:Function;
}

export default function StatusFilter({ filterMyListG, id, list, setList, statusToShow, statusG}:UIProps) {

    function changeStatus(statusText:string) {
        setList(
            list.map(
                single => {
                    if(single.id === id && single.showStatus[0] === "added" ) {
                        statusToShow = statusText;
                        return(
                            {
                                id: single.id,
                                title: single.title,
                                img: single.img,
                                status: statusText,
                                showStatus: single.showStatus,
                                numEpisodes: single.numEpisodes
                            }
                        );
                    }
                    return single;
                }
            )
        )
    }


    return(
        <div className="containerStatus">
            <div className="placeholder">{id ? statusToShow: statusG}</div>
            <div className="containerChoices">
                <span onClick={() => id != null ? changeStatus("Watching"): filterMyListG("Watching")} >Watching</span>
                <span onClick={() => id != null ? changeStatus("Completed"): filterMyListG("Completed")} >Completed</span>
                <span onClick={() => id != null ? changeStatus("Paused"): filterMyListG("Paused")}>Paused</span>
                <span onClick={() => id != null ? changeStatus("Planning"): filterMyListG("Planning")} >Planning</span>
            </div>
        </div>
    );
}
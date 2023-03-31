import { useEffect, useState } from 'react';
import './StatusFilter.scss';
import changeAnimeStatus from '../../lib/changeAnimeStatus';
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
        
        changeAnimeStatus({statusText, setList, list, statusToShow, id})
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
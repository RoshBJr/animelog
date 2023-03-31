import { useState } from 'react';
import './StatusFilter.scss';

interface UIProps {
    list:any[];
    setList:Function;
    id:string;
    statusToShow:string
}

export default function StatusFilter({id, list, setList, statusToShow}:UIProps) {

    const [status, setStatus] = useState(statusToShow);

    function changeStatus(statusText:string) {
        
        setList(
            list.map(
                single => {
                    if(single.id === id && single.showStatus[0] === "added" ) {
                        setStatus(statusText);
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
            <div className="placeholder">{status}</div>
            <div className="containerChoices">
                <span onClick={() => changeStatus("Watching")} >Watching</span>
                <span onClick={() => changeStatus("Completed")} >Completed</span>
                <span onClick={() => changeStatus("Paused")} >Paused</span>
                <span onClick={() => changeStatus("Planning")} >Planning</span>
            </div>
        </div>
    );
}
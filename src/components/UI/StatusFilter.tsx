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
    listTemp:any[];
    setListTemp:Function;
    myListActive:boolean;
}
export default function StatusFilter({myListActive,listTemp,setListTemp,filterMyListG, id, list, setList, statusToShow, statusG}:UIProps) {
    
    const [actif, setActif] = useState(false);
    
    function changeStatus(statusText:string, list:any[], setList:Function) {
            changeAnimeStatus({statusText, setList, list, statusToShow, id});
    }

    function choicesFadeIn() {
        setActif(!actif);
    }

    return(
        <div onClick={choicesFadeIn} className="containerStatus">
            <div className="placeholder">{id ? statusToShow: statusG}</div>
            <div className={id ? `containerChoices le${id} ${actif ? "fadein": 
                            "fadeout"}`: `containerChoices ${actif ? "fadeinG": "fadeoutG"}`}>

                    
                {
                    id ? <></>
                    :

                    <span onClick={() => {
                        myListActive ? 
                        changeStatus("All", listTemp, setListTemp)
                        :
                        console.log("nothing");
                    }} 
                    >All</span>
                }
                
                <span onClick={() => {
                    myListActive ? 
                        id != null ? 
                        changeStatus("Watching", listTemp, setListTemp): filterMyListG("Watching")
                    : id != null ? 
                    changeStatus("Watching", list, setList): filterMyListG("Watching")}
                } 
                >Watching</span>
                
                <span onClick={() => {
                    myListActive ? 
                        id != null ? 
                        changeStatus("Completed", listTemp, setListTemp): filterMyListG("Completed")
                    : id != null ? 
                    changeStatus("Completed", list, setList): filterMyListG("Completed")}
                }
                >Completed</span>

                <span onClick={() => {
                    myListActive ? 
                        id != null ? 
                        changeStatus("Paused", listTemp, setListTemp): filterMyListG("Paused")
                    : id != null ? 
                    changeStatus("Paused", list, setList): filterMyListG("Paused")}
                }
                >Paused</span>

                <span onClick={() => {
                    myListActive ? 
                        id != null ? 
                        changeStatus("Planning", listTemp, setListTemp): filterMyListG("Planning")
                    : id != null ? 
                    changeStatus("Planning", list, setList): filterMyListG("Planning")}
                } >Planning</span>
            </div>
        </div>
    );
}
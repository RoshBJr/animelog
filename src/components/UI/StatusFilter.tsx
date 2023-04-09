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
    filterOpen?:boolean;
    setfilterOpen?:Function;
}

export default function StatusFilter({setfilterOpen,filterOpen, myListActive,listTemp,setListTemp,filterMyListG, id, list, setList, statusToShow, statusG}:UIProps) {
    

    // const [actif, setActif] = useState(filterOpen);
    
    function changeStatus(statusText:string, list:any[], setList:Function) {
            if(statusText === "All") {
                filterMyListG(statusText);
            } else {
                changeAnimeStatus({statusText, setList, list, statusToShow, id});
            }
    }

    function choicesFadeIn() {
        // setActif(!actif);
        if(setfilterOpen) setfilterOpen(!filterOpen);
    }

    return(
        <div onClick={choicesFadeIn} className="containerStatus">
            <div className="placeholder">{id ? statusToShow: statusG}</div>
            <div className={id ? `containerChoices le${id} ${filterOpen ? "fadein": 
                            "fadeout"}`: `containerChoices ${filterOpen ? "fadeinG": "fadeoutG"}`}>

                    
                {
                    id && statusToShow !== "none" && myListActive ? <span onClick={() => { 
                        changeStatus("Remove", listTemp, setListTemp)
                    }} 
                    >Remove</span> 
                    :
                    !myListActive ?
                        <></>
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
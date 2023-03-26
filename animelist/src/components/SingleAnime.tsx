import { useState } from 'react';
import './SingleAnime.scss';

interface UIProps {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
}

export default function SingleAnime({id,img, title, list, setList}:UIProps) {
    
    const [status, setStatus] = useState("add");
    // const [text, setText] = useState("add");
    
    function addToLs() {
        // setText(status? "added": "add");
        setStatus("added");
        console.log('damn bro');
        setList([
            ...list,
            {
                id: id,
                title: title,
                status: "added",
                img: img
            }
        ])
    }

    return(
        <div className="singleAnime">
            <img src={img} alt={title}/>
            <div className="containerInfo">
                <h2 className="title">{title}</h2>
                <span onClick={status === 'add'? addToLs: () => null} className="status">{status}</span>
            </div>
        </div>
    );
}
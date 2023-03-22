import { title } from 'process';
import './css/add.scss';
import data from '../json/ghibli.json'
import { useState } from 'react';
// import { objHome } from './ListeDesAnimes';

export let emptyMyList:boolean = true;

interface Props {
    addImgSrc: string;
    addTitle: string;
    addText: string;
    id: number;
}


export default function Add({addImgSrc, addTitle, addText, id}: Props) {
    
    const [buttonText, setButtonText] = useState(addText);

    function AddToList() {
        if(addText === 'add') {
            AddToArray(addTitle,addImgSrc);
        }
        setButtonText('added');
        console.log(data.films[id].title);
        // objHome.info[id]['button']['theText'] = 'added';
        emptyMyList = false;
    }

    return (
        <div className="add">
            <span onClick={AddToList}>{buttonText}</span>
        </div>
    );
}

let arrayTitles:any = [];
let arrayImgs: any = [];
export const obj: any = {"films": []};

function AddToArray(theTitle:string, theImg: string) {
    arrayTitles.push(theTitle);
    arrayImgs.push(theImg);
    let objMovie: any = {"title":{theTitle}, "img": {theImg}};
    obj.films.push(objMovie);
}   
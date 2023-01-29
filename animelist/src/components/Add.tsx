import { title } from 'process';
import './css/add.css';
import SingleAnimeMyList from './SingleAnimeMyList';
import data from '../json/ghibli.json'

interface Props {
    addImgSrc: string;
    addTitle: string;
}

export default function Add({addImgSrc, addTitle}: Props) {

    function AddToList() {
        AddToArray(addTitle, addImgSrc);
    }

    return (
        <div className="add">
            <span onClick={AddToList}>add</span>

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

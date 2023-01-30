import '../components/css/listeDesAnimes.css';
import SingleAnimeHome from './SingleAnimeHome';
import data from '../json/ghibli.json';

let titles:any = [];
let images: string[];
let ListStatusText: string[];

export default function ListeDesAnimes() {
    
    return (
        <section className="listeDesAnimes">
            {objHome.info.map((serie:any, i:number) =>
                <SingleAnimeHome imgSrc={serie.img.theImg} 
                                 title={serie.title.theTitle} 
                                 text={serie.button.theText}
                                 id={i} />
            )}
        </section>
    );
}

export const objHome: any = {"info": []};
function BuildHomeList(theTitle:string, theImg: string, theText: string) {
    // arrayTitlesHome.push(theTitle);
    // arrayImgsHome.push(theImg);
    let objMovie: any = {"title":{theTitle}, "img": {theImg}, "button": {theText}};
    objHome.info.push(objMovie);
}

data.films.map((serie:any) => {
    BuildHomeList(serie.title, serie.image, 'add');  
})
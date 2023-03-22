import '../components/css/listeDesAnimes.scss';
import SingleAnimeHome from './SingleAnimeHome';
import data from '../json/ghibli.json';

// let titles:any = [];
// let images: string[];
// let ListStatusText: string[];

export default function ListeDesAnimes() {
    
    return (
        <section className="listeDesAnimes">
            {data.films.map((serie:any, i:number) =>
                <SingleAnimeHome
                        key={i} 
                        imgSrc={serie.image} 
                        title={serie.title} 
                        text={'add'}
                        id={i} 
                />
            )}
        </section>
    );
}



// export const objHome: any = {"info": []};
// function BuildHomeList(theTitle:string, theImg: string, theText: string) {
//     let objMovie: any = {"title":{theTitle}, "img": {theImg}, "button": {theText}};
//     objHome.info.push(objMovie);
// }

// data.films.map((serie:any) => {
//     BuildHomeList(serie.title, serie.image, 'add');  
// })
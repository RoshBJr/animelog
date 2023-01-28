import '../components/css/listeDesAnimes.css';
import SingleAnimeHome from './SingleAnimeHome';
import data from '../json/ghibli.json';

export default function ListeDesAnimes() {
    
    return (
        <section className="listeDesAnimes">
            {data.films.map((serie:any) =>
                <SingleAnimeHome imgSrc={serie.image} title={serie.title}/>
            )}
        </section>
    );
}
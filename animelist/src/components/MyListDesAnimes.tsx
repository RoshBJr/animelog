import SingleAnimeMyList from "./SingleAnimeMyList";
import { obj } from "./Add";
import '../components/css/myListDesAnimes.css';
import EmptyList from "./EmptyList";

function componentNotEmpty() {
        
 
}

function componentEmpty(props:any) {
    

    return (
        <EmptyList/>
    );
}

export default function MyListDesAnimes(props:any) {
    const isEmpty: boolean = props.isEmpty;
    
    if(isEmpty) {
        return <EmptyList/>;
    }
    else{
        return (
            <div className="myListDesAnimes">
                {obj.films.map((serie:any) =>
                    <SingleAnimeMyList imgSrc={serie.img.theImg} title={serie.title.theTitle}/>
                )}
            </div>
        );
    } 
}
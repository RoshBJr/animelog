import { GetMovieBanners, GetMovieTitles, GetMovieImages } from "./appendAnime.js";

let theBody = document.querySelector("body");

function enqueueMovies() {
    
    for(let i = 0; i < GetMovieTitles().length; i++) {
        
        let theImg = document.createElement('img');
        let theTitle = document.createElement('h1');
        
        theTitle.innerHTML = GetMovieTitles()[i];
        theImg.src = GetMovieImages()[i];

        theImg.append(theTitle);
        theBody.append(theImg);
    }
}

enqueueMovies();
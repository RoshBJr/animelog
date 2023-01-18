import { GetMovieBanners, GetMovieTitles, GetMovieImages } from "./appendAnime.js";

let theBody = document.querySelector("body");

function enqueueMovies() {
    
    for(let i = 0; i < GetMovieTitles().length; i++) {
        
        let theImg = {
            element: document.createElement('img'),
            src: GetMovieImages()[i]
        };

        let theTitle = {
            element: document.createElement('h1'),
            innerHtml: GetMovieTitles()[i]
        };

        let theContainer = {
            theDiv: document.createElement('div'),
            theClassName: `movie_${i}`
        };
        
        TheContainerMovieConstructor(
            theContainer.theDiv,
            theContainer.theClassName,
            theImg.element,
            theImg.src,
            theTitle.element,
            theTitle.innerHtml
            );
        

    }
}

enqueueMovies();

function TheContainerMovieConstructor(element, className, imgElement, imgSrc, titleElement, titleText) {
    element.className = className;
    imgElement.src = imgSrc;
    titleElement.innerHTML = titleText;
    element.append(titleElement);
    element.append(imgElement);
    theBody.append(element);
} 
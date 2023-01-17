import {getData}  from "./fetch.js";
import data from '/json/ghibli.json' assert {type: 'json'};

console.log(data);

let dataMovies = data.films;
let numMovies = data.films.length;

function GetMovieTitles() {
    
    let titlesArray = [];

    for(let i = 0; i< numMovies; i++) {
        titlesArray.push(dataMovies[i].title);
    }

    return titlesArray;
    
}
function GetMovieImages() {
    
    let imgsArray = [];

    for(let i = 0; i< numMovies; i++) {
        imgsArray.push(dataMovies[i].image);
    }

    return imgsArray;
    
}
function GetMovieBanners() {
    
    let bannersArray = [];
    
    for(let i = 0; i< numMovies; i++) {
        bannersArray.push(dataMovies[i].movie_banner);
    }

    return bannersArray;
    
}

console.log(GetMovieTitles());

// export const someFunc = () => {
//     getData().then(data => {
//         /* do what you want to do in promise resolve callback function */
//         console.log(data);
//     })
//  }
 
//  someFunc();
export { GetMovieBanners, GetMovieImages, GetMovieTitles};
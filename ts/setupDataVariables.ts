import data from './json/ghibli.json';

export class GetMoviesParameters {
    dataMovies: object = data.films;
    numMovies: number = data.films.length;
    movieTitlesArray: string[];
    movieImgsArray: string[];

    constructor() {
        let titlesArray: string[] = [];
        let movieImgsArray: string[] = [];
        for (let i = 0; i < this.numMovies; i++) {
            titlesArray.push(this.dataMovies[i].title);
            movieImgsArray.push(this.dataMovies[i].image);
        }

        this.movieTitlesArray = titlesArray;
        this.movieImgsArray = movieImgsArray;
    }
}

let moviedata = new GetMoviesParameters();
export let titles = moviedata.movieTitlesArray;
export let imgs = moviedata.movieImgsArray;
export let numMovies = moviedata.numMovies;
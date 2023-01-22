import { GetMoviesParameters, imgs, numMovies, titles } from "./setupDataVariables";

class DisplayMovies extends GetMoviesParameters {
    theBodyEl: HTMLElement;
    imgEl: any;
    titleEl: HTMLElement;
    container: HTMLElement;
    srcImg: string;
    titleString: string;
    
    constructor(srcImg: string, titleString: string) {
        super();
        this.theBodyEl = document.querySelector('body');
        this.imgEl = document.createElement('img');
        this.titleEl = document.createElement('h1');
        this.container = document.createElement('div');
        this.srcImg = srcImg;
        this.titleString = titleString;
    }

    SetupMovieCard() {
        this.titleEl.innerHTML = this.titleString;
        this.imgEl.src = this.srcImg;
        this.container.append(this.titleEl);
        this.container.append(this.imgEl);
        this.theBodyEl.append(this.container);
    }

}

function enqueueMovies() {
    for (let i = 0; i < numMovies; i++) {
        let aMovie = new DisplayMovies(imgs[i], titles[i]);
        aMovie.SetupMovieCard();
        
    }
}
enqueueMovies();
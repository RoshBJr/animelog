import './css/main.css';
import { useState } from 'react';
import ListeDesAnimes from './ListeDesAnimes';
import MyListDesAnimes from './MyListDesAnimes';
import { emptyMyList } from './Add';

export default function Main() {

    const [PageComponent, setPageComponent] = useState(<ListeDesAnimes/>);

    function ReturnHome() {
        setPageComponent(<ListeDesAnimes/>);
    }

    function MyList() {
        SetPageComponentEmpty(emptyMyList)
    }

    function SetPageComponentEmpty(empty: boolean) {
        setPageComponent(<MyListDesAnimes isEmpty={empty}/>);
    }

    return (
        <>
            <header className="headerNav">
                <h1>AnimeLoG</h1>
                <nav>
                    <span onClick={ReturnHome}>Home</span>
                    <span onClick={MyList}>My list</span>
                </nav>
            </header>
            {PageComponent}
        </>  
    );
}
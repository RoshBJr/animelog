import './css/header.css';
import { useState } from 'react';
import ListeDesAnimes from './ListeDesAnimes';
import MyListDesAnimes from './MyListDesAnimes';

export default function Header() {

    const [PageComponent, setPageComponent] = useState(<ListeDesAnimes/>);

    function ReturnHome() {
        setPageComponent(<ListeDesAnimes/>);
    }

    function MyList() {
        setPageComponent(<MyListDesAnimes/>);
    }

    return(
        <>
            <header className="headerNav">
                <h1>AnimeLoG</h1>
                <nav>
                    <button onClick={ReturnHome}>Home</button>
                    <button onClick={MyList}>My list</button>
                </nav>
            </header>
            {PageComponent}
        </>
    );
}
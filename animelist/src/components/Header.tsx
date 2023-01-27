import './css/header.css';

export default function Header() {

    return(
        <header className="headerNav">
            <h1>AnimeLoG</h1>
            <nav>
                <span>Home</span>
                <span>My List</span>
            </nav>
        </header>
    );
}
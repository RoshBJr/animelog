import './Header.scss';

export default function Header() {

    return (
        <header>
            <h1>AnimeLoG</h1>
            <div className="links">
                <span className="homeList">Home</span>
                <span className="myList">My list</span>
            </div>
        </header>
    );
}
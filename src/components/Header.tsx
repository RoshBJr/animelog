import './Header.scss';

interface UIProps {
    filterUserList: Function;
    filterHomeList: Function;
}

export default function Header({filterUserList, filterHomeList}:UIProps) {

    return (
        <header>
            <h1>AnimeLoG</h1>
            <div className="links">
                <span onClick={() => filterHomeList()} className="homeList">Home</span>
                <span onClick={() => filterUserList()} className="myList">My list</span>
            </div>
        </header>
    );
}
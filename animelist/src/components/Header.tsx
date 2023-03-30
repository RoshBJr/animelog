import './Header.scss';

interface UIProps {
    list:any[];
    filterUserList: Function;
    filterHomeList: Function;
}

export default function Header({list, filterUserList, filterHomeList}:UIProps) {

    return (
        <header>
            <h1>AnimeLoG</h1>
            <div className="links">
                <button onClick={() => filterHomeList()} className="homeList">Home</button>
                <button onClick={() => filterUserList()} className="myList">My list</button>
            </div>
        </header>
    );
}
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
                <span onClick={() => filterHomeList()} className="homeList">Home</span>
                <span onClick={() => filterUserList()} className="myList">My list</span>
            </div>
        </header>
    );
}
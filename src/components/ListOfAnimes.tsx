import './ListOfAnimes.scss';
import data from '../json/ghibli.json';
import SingleAnime from './SingleAnime';
import logo from '../images/cinema.svg';
import StatusFilter from './UI/StatusFilter';

interface UIProps {
    list:any[];
    setList:Function;
    myListActive: boolean;
    statusG:string;
    filterMyListG:Function;
    listTemp:any[];
    setListTemp:Function;
    filterAll:Function;
}

export default function ListOfAnimes({filterAll,listTemp,setListTemp,filterMyListG, statusG, list, setList, myListActive}:UIProps) {

    return (
        myListActive && list.length == 0 
        ?
        <div className="containerMyListVide">
            <StatusFilter
            myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
                
            <h1>Silence is bliss</h1>
            <img src={logo} alt="cinema" />
        </div>
        :
        <div className="containerAnimes">
            {myListActive ?
                <StatusFilter
                myListActive={myListActive}
                listTemp={listTemp}
                setListTemp={setListTemp}
                filterMyListG={filterMyListG}
                statusG={statusG}
                list={list}
                setList={setList} />
                :
                <></>
            }
            {
                list.map(
                    singleAnime =>
                        <SingleAnime
                            listTemp={listTemp}
                            setListTemp={setListTemp}
                            statusG={statusG}
                            key={singleAnime.id}
                            id={singleAnime.id}
                            img={singleAnime.img}
                            title={singleAnime.title}
                            status={singleAnime.showStatus}
                            list={list}
                            setList={setList}
                            myListActive={myListActive}
                            statusText={singleAnime.status}
                            filterMyListG={filterMyListG}
                        />
                )
            }
        </div>
    );
}
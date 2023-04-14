import './EpisodeCounter.scss';

interface UIProps {
    currentEp: number;
    totalEp: number;
    list:any[];
    setList:Function;
    id:string;
    episodePlus:Function;
}

export default function EpisodeCounter({episodePlus, list, setList, currentEp, totalEp, id}:UIProps) {


    function bruh() {
        setList(
            list.map(
                single => {
                    if(single.id === id) {
                        // console.log(single.currentEpisode);
                        currentEp += 1;
                        return(
                            {
                                bgColor: single.bgColor,
                                id: single.id,
                                title: single.title,
                                img: single.img,
                                status: single.status,
                                showStatus: single.showStatus,
                                numEpisodes: single.numEpisodes,
                                currentEpisode: currentEp
                            }
                        )
                    }
                    return single;
                }
            )
        );
    }

    return (
        <div className="containerCount">
            <span className="minus">-</span>
            <div className="Counter">
                <span className="current">{currentEp}</span>
                <span className="division"></span>
                <span className="total">{totalEp}</span>
            </div>
            <span onClick={() => bruh()} className="plus">+</span>
        </div>
    );
}
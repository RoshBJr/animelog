interface Props {
    statusText: string;
    setList: Function;
    list: any[];
    statusToShow?: string;
    id?: string;
}

function changeAnimeStatus({statusText, setList, list, statusToShow, id}:Props) {
    console.log("filter was: ", statusText);
    if(statusText !== "All") {
        setList(
            list.map(
                single => {
                    if(single.id === id && single.showStatus[0] === "added" && statusText !== "Remove") {
                        statusToShow = statusText;
                        return(
                            {
                                bgColor: "added",
                                id: single.id,
                                title: single.title,
                                img: single.img,
                                status: statusText,
                                showStatus: single.showStatus,
                                numEpisodes: single.numEpisodes,
                                currentEpisode: single.currentEpisode
                            }
                        );
                    } else if(single.id === id && single.showStatus[0] === "add" && statusText !== "Remove") {
                        return(
                            {
                                bgColor: "added",
                                id: id,
                                title: single.title,
                                img: single.img,
                                status: statusText,
                                showStatus: ["added"],
                                currentEpisode: single.currentEpisode,
                                numEpisodes: single.numEpisodes
                            }
                        );
                    } else if(single.id === id && single.showStatus[0] === "added" && statusText === "Remove"){
                        return(
                            {
                                bgColor: "unAdded",
                                id: id,
                                title: single.title,
                                img: single.img,
                                status: "none",
                                showStatus: ["add"],
                                currentEpisode: single.currentEpisode,
                                numEpisodes: single.numEpisodes
                            }
                        );
                    }
                    return single;
                }
            )
        )
    }
}



export default changeAnimeStatus;
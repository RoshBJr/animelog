interface Props {
    statusText: string;
    setList: Function;
    list: any[];
    statusToShow?: string;
    id?: string;
}

function changeAnimeStatus({statusText, setList, list, statusToShow, id}:Props) {
    setList(
        list.map(
            single => {
                if(single.id === id && single.showStatus[0] === "added" ) {
                    statusToShow = statusText;
                    return(
                        {
                            id: single.id,
                            title: single.title,
                            img: single.img,
                            status: statusText,
                            showStatus: single.showStatus,
                            numEpisodes: single.numEpisodes
                        }
                    );
                } else if(single.id === id && single.showStatus[0] === "add") {
                    return(
                        {
                            id: id,
                            title: single.title,
                            img: single.img,
                            status: statusText,
                            showStatus: ["added"],
                            numEpisodes: 1
                        }
                    );
                }
                return single;
            }
        )
    )
    
    localStorage.setItem("anime-list-ls", JSON.stringify(list));

    
}



export default changeAnimeStatus;
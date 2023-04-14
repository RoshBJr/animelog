interface Props {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
    bgColor:string;
    setBgColor:Function;
}

function modifyAnimePropsLs({setList, list, id, title, img, bgColor, setBgColor}:Props) {
    setList(
        list.map(
            single => {
                if(single.id === id && single.showStatus[0] === "add") {
                    setBgColor("unAdded");
                    return(
                        {
                            bgColor: "added",
                            id: id,
                            title: title,
                            img: img,
                            status: "Watching",
                            showStatus: ["added"],
                            numEpisodes: single.numEpisodes,
                            currentEpisode: single.currentEpisode
                        }
                    );
                }
                else if(single.id === id && single.showStatus[0] === "added") {
                    setBgColor("added");
                    return(
                        {
                            bgColor: "unAdded",
                            id: id,
                            title: title,
                            img: img,
                            status: "none",
                            showStatus: ["add"],
                            numEpisodes: single.numEpisodes,
                            currentEpisode: single.currentEpisode
                        }
                    );
                }
                return single;
            }
        )
    )
}

export default modifyAnimePropsLs;
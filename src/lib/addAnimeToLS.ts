interface Props {
    id:string;
    img:string;
    title:string;
    list:any[];
    setList:Function;
}

function modifyAnimePropsLs({setList, list, id, title, img}:Props) {
    setList(
        list.map(
            single => {
                if(single.id === id && single.showStatus[0] === "add") {
                    return(
                        {
                            id: id,
                            title: title,
                            img: img,
                            status: "Watching",
                            showStatus: ["added"],
                            numEpisodes: 1
                        }
                    );
                }
                else if(single.id === id && single.showStatus[0] === "added") {
                    return(
                        {
                            id: id,
                            title: title,
                            img: img,
                            status: "none",
                            showStatus: ["add"],
                            numEpisodes: 1
                        }
                    );
                }
                return single;
            }
        )
    )
}

export default modifyAnimePropsLs;
interface Props {
    setStatusG: Function;
    myListActive: boolean;
    setList: Function;
    item:any;
    statusText:string;
}

function statusFilterList({setStatusG, myListActive, setList, item, statusText}:Props) {
    setStatusG(statusText);
    console.log("filter ", statusText);
    if(myListActive && statusText !== "All") {
      console.log("in if");
      setList(
          JSON.parse(item).filter(
            (serie: { status: string; }) => {
              if(serie.status === statusText) {
                return(serie);
              }
            }
          )
      )
    } else {
      console.log('in else');
      setList(
        JSON.parse(item).filter(
          (serie: { showStatus: string[]; }) => {
            if(serie.showStatus[0] === "added") {
              return(serie);
            }
          }
        )
    )
    }
}

export default statusFilterList;
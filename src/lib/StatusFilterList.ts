interface Props {
    setStatusG: Function;
    myListActive: boolean;
    setList: Function;
    item:any;
    statusText:string;
}

function statusFilterList({setStatusG, myListActive, setList, item, statusText}:Props) {
    setStatusG(statusText);
    if(myListActive) {
      setList(
          JSON.parse(item).filter(
            (serie: { status: string; }) => {
              if(serie.status === statusText) {
                return(serie);
              }
            }
          )
      )
    }
}

export default statusFilterList;
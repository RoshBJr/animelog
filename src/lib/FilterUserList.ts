interface Props {
    setMyListActive:Function;
    setList:Function;
    list:any[];
}

function userList({setMyListActive, setList, list}:Props) {
    setMyListActive(true);
    setList(
      list.filter(
        (serie: { showStatus: string[], status:string }) => {
          if(serie.showStatus[0] === "added") {
            return(serie);
          }
        }
      )
    )
  }

  export default userList;
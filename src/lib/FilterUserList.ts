interface Props {
  setMyListActive:Function;
  setList:Function;
  list:any[];
}

function userList({setMyListActive, setList, list}:Props) {
  console.log("filter my list ");
    setMyListActive(true);
    setList(
        list.filter(
          (serie: { showStatus: string[]; }) => {
            if(serie.showStatus[0] === "added") {
              return(serie);
            }
          }
        )
    )
}

export default userList;
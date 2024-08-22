import React, { useEffect, useState } from 'react'

const List = ({ getListNumber }) => {

    const [listNum, setListNum] = useState(false);

    useEffect(() => {
        console.log("NitinConsole", "Inside List Component");
        setListNum(getListNumber(0))
    },[getListNumber])
    
  return (
    <>{listNum ? listNum.map((data) => {return <div>{data}</div>}) : null}</>
  )
}

export default List
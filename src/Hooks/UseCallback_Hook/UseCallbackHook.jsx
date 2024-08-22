import React, { useCallback, useState } from 'react'
import List from './List';

const UseCallbackHook = () => {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getListNumber = useCallback((takeInput) => {
        return [number + takeInput, number + takeInput + 1, number + takeInput + 2];
    }, [number])

    const themeStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }

  return (
    <>
    <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
    <button onClick={() => setDark(!dark)}>Change Theme</button>
    <div style={themeStyle}>List of Numbers: <List getListNumber={getListNumber}/></div>
    </>
  )
}

export default UseCallbackHook
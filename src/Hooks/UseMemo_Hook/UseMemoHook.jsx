import React, { useMemo, useState } from 'react'

export const UseMemoHook = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = useMemo(() => makeComponentSlow(number), [number]) ;

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }, [dark])

  return (
    <>
    <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
    <button onClick={() => setDark(!dark)}>Change Theme</button>
    <div style={themeStyle}>Doubled the Number: {doubleNumber} </div>
    </>
  )
}

function makeComponentSlow(number) {
    console.log("NitinConsole", "Function Called");
    for(let i = 0; i <= 1000000000; i++) {}   
    return number * 2;
}
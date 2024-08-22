import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
/*
The "useRef" hook in React is used to create a mutable reference object that persists across re-renders. This object is often used to reference a DOM element directly, store a value that doesn’t trigger a re-render when it changes, or keep a reference to any mutable value.
*/

    const getMyRef = useRef(null);
    const prevName = useRef('');
    const [name, setName] = useState("");
    const [freeze, setFreeze] = useState(false);

    const handleValue = (e) => {
      setName(e.target.value);
    }

    const getInputVal = () => {
      // let htmlElement = getMyRef.current.value;
      // document.getElementById('place-the-value').innerHTML = htmlElement;
      setFreeze(true);
    }

    const handleRefresh = () => {
      setFreeze(false)
      setName("")
      // document.getElementById('place-the-value').innerHTML = `Entered Name ${name} and just the previous letter ${prevName.current}`;
    }

    useEffect(() => {
      prevName.current = name
    },[name])

    useEffect(() => {
      getMyRef.current?.focus();
    }, [])

  return (
    <>
      <div id='useref-container' style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "10px"}}>
        <input ref={getMyRef} className='input-tag' type='text' value={name} onChange={(e) => handleValue(e)} placeholder='Enter Name.....' disabled={freeze}/>
        <br />
        <button onClick={() => getInputVal()}>Focus Element</button>
        <br />
        <button onClick={() => handleRefresh()}>Refresh</button>
      </div>
      <br />
      <div id='place-the-value'>
        Entered Name {name} and just the previous letter {prevName.current}
      </div>
    </>
  )
}

export default UseRefHook
import React, { useState, useCallback } from 'react';

const SimpleTest = () => {

    const [value, setValue] = useState(0);
    let num = 0;

    const addFunction = (num) => {
        setValue(old => old + num);
    }

    // const handleClick = useCallback(() => {
    //     // setValue(old => old + 1);
    //     addFunction(num)
    // },[num])
    const handleClick = useCallback(() => {
        // setValue(old => old + 1);
        addFunction(num)
    },[num])

    return (
        <div>
            { value}
            <button onClick={() => handleClick(num = 2)}> + </button>
        </div>
    )

}

export default SimpleTest;
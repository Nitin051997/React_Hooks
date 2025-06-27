import React from 'react'


const TestFormOne = () => {
    // const empid = 0;
    // const empid = null;
    // const empid = "";
    // const empid = undefined;
    const empid = false;
  return (
    // empid ? <div>Component Pass</div> : <></>
    empid&&<div>Component Pass</div>
  )
}


export default TestFormOne
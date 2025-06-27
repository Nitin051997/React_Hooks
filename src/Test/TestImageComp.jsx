import React, { useState } from 'react'
import { displayBrowser, displayBrowserName } from './displayBrowser'

const TestImageComp = () => {

    const [show, setShow] = useState(false);

    let data = [{"browser_name": "Google Chrome"},{"browser_name": "Apple Safari"},{"browser_name": "Mozilla Firefox"},{"browser_name": "Microsoft Edge (Chromium)"},{"browser_name": "Internet Explorer"},{"browser_name": "XYZ"}]

  return (
  <>
  <button onClick={() => setShow(!show)}>click</button>
    {show ? 
    <div>
        {data.map((data, index) => {
            return (
            <img
            key={index}
            // src={displayBrowser(data?.browser_name)}
            src={require("../assets/Timeline/" + displayBrowserName(data?.browser_name) + ".svg")}
            alt="Platform"
            />) 
        })}
    </div> : <></>}
  </>
)
}

export default TestImageComp
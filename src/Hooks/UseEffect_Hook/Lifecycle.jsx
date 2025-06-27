import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Lifecycle = () => {

    const [value, setvalue] = useState("");
    const [loading, setLoading] = useState(true);
    const [getWidth, setWidth] = useState(window.innerWidth);

    // let loading = true;

    const navigate = useNavigate();

    useEffect(() => {
        if(value.length > 0) console.log("conponent updated")
    },[value]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    },[]);

    useEffect(() => {
        console.log("conponent mounted");
        return () => {
            console.log("conponent un-mounted");
        }
    },[]);

    useMemo(() => {
        setTimeout(() => {
            console.log("looping end");
            setLoading(false);
        }, 10000);
    },[]);

    return (
        <>
                {/* {!loading&&<div>Lifecycle<input value={value} onChange={(e) => setvalue(e.target.value)} /><button onClick={() => navigate("/checkLifecycle")}>CLick</button></div>}
<iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d152518.64205242196!2d73.06777441765816!3d19.17721525029867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bfaa3167e8ed%3A0x2296529ed2cf0402!2sDance%20Hub%20Studio!5e0!3m2!1sen!2sin!4v1730877473295!5m2!1sen!2sin"
                  width={getWidth}
                  height="400"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='iframe'
                ></iframe> */}
                <div style={{width: getWidth, backgroundColor: "red", height: "50px"}}>
                    </div>
        </>
    )
}

export default Lifecycle;
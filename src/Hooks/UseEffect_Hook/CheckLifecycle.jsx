import React from 'react'
import { useNavigate } from 'react-router-dom';

const CheckLifecycle = () => {

    const navigate = useNavigate();

  return (
    <div>CheckLifecycle<button onClick={() => navigate("/lifecycle")}>Click</button></div>
  )
}

export default CheckLifecycle
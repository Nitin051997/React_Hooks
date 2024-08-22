import React, { useContext } from 'react'
import { UseContextHook, UseCustomSetDataHook } from '../UseContextHook';

const FormReport = () => {

    const userDetails = useContext(UseContextHook);
    const setOperators = useContext(UseCustomSetDataHook);

  return (
    <>
        <p>User Name: {userDetails?.firstName + " " + userDetails?.lastName}</p>
        <p>User Age: {userDetails?.age}</p>
        <p>User Email: {userDetails?.email}</p>
        <button onClick={() => setOperators?.setShowApplication(true)}>Print Application</button>
    </>
  )
}

export default FormReport
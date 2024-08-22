import React, { useState } from 'react'
import FormTask from './Example/FormTask';
import FormInput from './Example/FormInput';
import { UseContextHook, UseCustomSetDataHook } from './UseContextHook';

const FormStructure = () => {

    const [userDetails, setUserDetails] = useState({
        "firstName": "",
        "lastName": "",
        "age": 0,
        "email": "",
      })

    const [showApplication, setShowApplication] = useState(false);

  return (
    <>
    <UseContextHook.Provider value={userDetails}>
        {showApplication
        ? <>
            <FormTask />
        </>
        : <>
            <UseCustomSetDataHook.Provider value={{ setUserDetails, setShowApplication }}>
                <FormInput />
            </UseCustomSetDataHook.Provider>
        </>}
    </UseContextHook.Provider>
    </>
  )
}

export default FormStructure
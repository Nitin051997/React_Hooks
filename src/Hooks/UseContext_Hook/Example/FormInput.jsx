import React, { useContext } from 'react'
import FormReport from './FormReport'
import { UseCustomSetDataHook } from '../UseContextHook'

const FormInput = () => {

    const setOperators = useContext(UseCustomSetDataHook);

    const handleUserDetails = (event, type) => {
        if(type === "firstName"){
            setOperators?.setUserDetails((old) => {
                return {...old, "firstName": event.target.value}
            })
        }else if(type === "lastName"){
            setOperators?.setUserDetails((old) => {
                return {...old, "lastName": event.target.value}
            })
        }else if(type === "age"){
            setOperators?.setUserDetails((old) => {
                return {...old, "age": event.target.value}
            })
        }else if(type === "email"){
            setOperators?.setUserDetails((old) => {
                return {...old, "email": event.target.value}
            })
        }
    }

  return (
    <>
    <input type='text' placeholder='First Name' onChange={(event) => handleUserDetails(event, "firstName")}/>
    <input type='text' placeholder='Last Name' onChange={(event) => handleUserDetails(event, "lastName")}/>
    <input type='number' placeholder='Age' onChange={(event) => handleUserDetails(event, "age")}/>
    <input type='email' placeholder='E-mail' onChange={(event) => handleUserDetails(event, "email")}/>
    <FormReport />
    </>
  )
}

export default FormInput
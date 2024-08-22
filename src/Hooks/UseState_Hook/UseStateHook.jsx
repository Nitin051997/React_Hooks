import React, { useState } from 'react'

const UseStateHook = () => {

    const [userDetails, setUserDetails] = useState({
        "firstName": "",
        "lastName": "",
        "age": 0,
        "email": "",
    })

    const handleUserDetails = (event, type) => {
        if(type === "firstName"){
            setUserDetails((old) => {
                return {...old, "firstName": event.target.value}
            })
        }else if(type === "lastName"){
            setUserDetails((old) => {
                return {...old, "lastName": event.target.value}
            })
        }else if(type === "age"){
            setUserDetails((old) => {
                return {...old, "age": event.target.value}
            })
        }else if(type === "email"){
            setUserDetails((old) => {
                return {...old, "email": event.target.value}
            })
        }
    }

  return (
    <>
    <input value={userDetails?.firstName} type='text' placeholder='First Name' onChange={(event) => handleUserDetails(event, "firstName")}/>
    <input value={userDetails?.lastName} type='text' placeholder='Last Name' onChange={(event) => handleUserDetails(event, "lastName")}/>
    <input value={userDetails?.age} type='number' placeholder='Age' onChange={(event) => handleUserDetails(event, "age")}/>
    <input value={userDetails?.email} type='email' placeholder='E-mail' onChange={(event) => handleUserDetails(event, "email")}/>
    </>
  )
}

export default UseStateHook
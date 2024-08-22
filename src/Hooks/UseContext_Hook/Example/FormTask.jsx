import React, { useContext } from 'react'
import { UseContextHook } from '../UseContextHook';

const FormTask = () => {

    const userDetails = useContext(UseContextHook);

    var systemDate = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var year = systemDate.getFullYear();
    var month = monthNames[systemDate.getMonth()];
    var day = systemDate.getDate();

  return (
    <>
        <h3>Application Verified</h3>
        <p>User Name: {userDetails?.firstName + " " + userDetails?.lastName}</p>
        <p>User Age: {userDetails?.age}</p>
        <p>User Email: {userDetails?.email}</p>
        <p>Last Updated: {month + "/" + day + "/" + year}</p>
    </>
  )
}

export default FormTask
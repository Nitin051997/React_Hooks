import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Lifecycle from './UseEffect_Hook/Lifecycle.jsx';
import CheckLifecycle from './UseEffect_Hook/CheckLifecycle.jsx';
import SimpleTest from './UseCallback_Hook/SimpleTest.jsx';
import TestFormOne from './Test/TestFormOne.jsx';
import TestImageComp from '../Test/TestImageComp.jsx';

const Lander = () => {
  return (
    <Routes>
        <Route path='/lifecycle' element={<Lifecycle />}/>
        <Route path='/checkLifecycle' element={<CheckLifecycle />}/>
        <Route path='/SimpleTest' element={<SimpleTest />} />
        <Route path='/TestFormOne' element={<TestFormOne />} />
        <Route path='/TestImageComp' element={<TestImageComp />}/>
    </Routes>
  )
}

export default Lander;
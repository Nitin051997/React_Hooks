import React, { useId } from 'react'

const UseIdHook = () => {
    
    const id = useId();

    return (
    <>
        <h1 id={id + '-H1'}>Audit Form: React ID - {id + '-H1'}</h1>
        <h2 id={id + '-H2'}>Audit Form: React ID - {id + '-H2'}</h2>
        <h3 id={id + '-H3'}>Audit Form: React ID - {id + '-H3'}</h3>
        <h4 id={id + '-H4'}>Audit Form: React ID - {id + '-H4'}</h4>
    </>
  )
}

export default UseIdHook
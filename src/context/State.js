import React from 'react'
import { useState } from 'react'
import Context from './Context'

const State = (props) => {
  const [darkmode, setdarkmode] = useState(false);
  const [darkcard, setdarkcard] = useState("card")
  return (
    <>
    <Context.Provider value={{darkmode, setdarkmode, darkcard, setdarkcard}}>
        {props.children}
    </Context.Provider>
    </>
  )
}

export default State
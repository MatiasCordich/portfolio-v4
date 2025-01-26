import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

const LangToggle = () => {

  const options = ["EN", "ESP"]
  return (
    <Dropdown buttonLabel="Lenguaje" options={options}></Dropdown>
  )
}

export default LangToggle

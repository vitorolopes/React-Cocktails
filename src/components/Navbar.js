import React from 'react'
import { useGlobalContext } from '../context'

const Navbar = () => {

  const {test} = useGlobalContext()

  return (
    <div>Navbar -- {test}</div>
  )
}

export default Navbar
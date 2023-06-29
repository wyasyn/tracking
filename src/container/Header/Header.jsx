import React from 'react'
import { Hero, Nav, NavMobile } from '../../components'

const Header = () => {
  return (
   <header className='header'>
    <NavMobile />
    <Nav />
    <Hero />
   </header>
  )
}

export default Header
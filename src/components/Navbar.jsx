import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const setActiveClass = ({isActive}) => (isActive ? 'active' : null)
  return (
    <>
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/home' className={setActiveClass} >Home</NavLink>
        </li>
        <li>
          <NavLink to='/pokemones' className={setActiveClass} >Pokemones</NavLink>
        </li>
      </ul>
    </nav>
      
    </>
  )
}

export default Navbar
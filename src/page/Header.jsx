import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

export const Header = () => {
  return (
    <div className='header'>
       <NavLink to="/">All</NavLink>
       <NavLink to="/active">Active</NavLink>
       <NavLink to="/completed">Completed</NavLink>
    </div>
  )
}

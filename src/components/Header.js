import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/create" activeClassName="active">Create</NavLink>
            <NavLink to="/contact" activeClassName="active">contact</NavLink>
        </header>
    )
}

export default Header

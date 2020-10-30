import React from 'react'
import NavbarLink from '../navbarLink'

import { Component, Brand, Links } from './navbar.styles'

const Navbar: React.FC = (): JSX.Element => {
    return (
        <Component>  
            <div className="container">
                <Brand>
                    FIREUP.PRO
                </Brand>
                <Links>
                    <NavbarLink link='/' text='HOME'/>
                    <NavbarLink link='/' text='MENU 2'/>
                    <NavbarLink link='/' text='MENU 3'/>
                    <NavbarLink link='/weather' text='POGODA'/>
                </Links>
            </div>
        </Component>
    )
}

export default Navbar
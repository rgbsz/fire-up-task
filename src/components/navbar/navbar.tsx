import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import NavbarLink from '../navbarLink'

import BrandImage from '../../images/brand.png'

import { Component, Brand, Links } from './navbar.styles'

const Navbar: React.FC = (): JSX.Element => {
    const location = useLocation().pathname
    return (
        <Component>  
            <div className="container">
                <Brand src={BrandImage}/>
                <Links>
                    <NavbarLink link='/' text='HOME' active={location === '/' ? true : false}/>
                    <NavbarLink link='/' text='MENU 2' active={false}/>
                    <NavbarLink link='/' text='MENU 3' active={false}/>
                    <NavbarLink link='/weather' text='POGODA' active={location === '/weather' ? true : false}/>
                </Links>
            </div>
        </Component>
    )
}

export default Navbar
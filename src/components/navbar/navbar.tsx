import React, { useState } from 'react'
import { useLocation } from 'react-router'
import NavbarLink from '../navbarLink'

import BrandImage from '../../images/brand.png'

import { Component, Brand, Links } from './navbar.styles'
import Hamburger from '../hamburger'
import MobileNav from '../mobileNav'

const Navbar: React.FC = (): JSX.Element => {
    const location = useLocation().pathname
    const [mobileNavStatus, setMobileNavStatus] = useState<boolean>(false)
    return (
        <Component>  
            <div className="myContainer">
                <Brand src={BrandImage}/>
                <Links className='hide-on-med-and-down'>
                    <NavbarLink link='/' text='HOME' active={location === '/' ? 1 : 0}/>
                    <NavbarLink link='/' text='MENU 2' active={0}/>
                    <NavbarLink link='/' text='MENU 3' active={0}/>
                    <NavbarLink link='/weather' text='POGODA' active={location === '/weather' ? 1 : 0}/>
                </Links>
                <Hamburger status={mobileNavStatus} setStatus={() => setMobileNavStatus((prev: boolean) => !prev)}/>
            </div>
            <MobileNav status={mobileNavStatus} setStatus={() => setMobileNavStatus((prev: boolean) => !prev)}/>
        </Component>
    )
}

export default Navbar
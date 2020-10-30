import React from 'react'
import Link from '../link'

import { Component, Brand, Links } from './navbar.styles'

const Navbar: React.FC = (): JSX.Element => {
    return (
        <Component>  
            <div className="container">
                <Brand>
                    FIREUP.PRO
                </Brand>
                <Links>
                    <Link text='HOME'/>
                    <Link text='MENU 2'/>
                    <Link text='MENU 3'/>
                    <Link text='POGODA'/>
                </Links>
            </div>
        </Component>
    )
}

export default Navbar
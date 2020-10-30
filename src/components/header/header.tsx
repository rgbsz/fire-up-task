import React, { ReactChild } from 'react'
import HeaderItem from '../headerItem'

import { Image, Heading, Items } from './header.styles'

const Header: React.FC = (): JSX.Element => {
    return (
        <Image>
            <div className='container'>
                <Heading>Feel the Power of Typography</Heading>
                <Items className='row'>
                    <HeaderItem className='col l4 s12'/>
                    <HeaderItem className='col l4 s12'/>
                    <HeaderItem className='col l4 s12'/>
                </Items>
            </div>
        </Image>
    )
}

export default Header
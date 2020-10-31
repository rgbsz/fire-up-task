import React, { ReactChild } from 'react'

import firstIcon from '../../images/Icon1.png'
import secondIcon from '../../images/Icon2.png'
import thirdIcon from '../../images/Icon3.png'
import theme from '../../theme'

import HeaderItem from '../headerItem'

import { Image, Heading, Items } from './header.styles'

const Header: React.FC = (): JSX.Element => {
    return (
        <Image>
            <div className='container'>
                <Heading>Feel the Power of Typography</Heading>
                <Items className='row color'>
                    <HeaderItem className='col l4 s12' icon={firstIcon} text='Typography' background={theme.colors.red} opacity='1'/>
                    <HeaderItem className='col l4 s12' icon={secondIcon} text='Responsive Web Design' background={theme.colors.blue} opacity='.8'/>
                    <HeaderItem className='col l4 s12' icon={thirdIcon} text='UX Design' background={theme.colors.green} opacity='.8'/>
                </Items>
            </div>
        </Image>
    )
}

export default Header
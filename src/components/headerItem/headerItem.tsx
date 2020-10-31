import React from 'react'
import theme from '../../theme'
import { Wrapper } from './headerItem.styles'
import { IHeaderItemProps } from './headerItem.types'

const HeaderItem: React.FC<IHeaderItemProps> = ({ className, icon, text, background, opacity }): JSX.Element => {
    return (
        <Wrapper className={className} background={background} opacity={opacity}>
            <img src={icon}/>
            <span>{text}</span>
        </Wrapper>
    )
}

export default HeaderItem
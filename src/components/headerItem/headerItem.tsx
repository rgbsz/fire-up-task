import React from 'react'
import { Wrapper } from './headerItem.styles'
import { IHeaderItemProps } from './headerItem.types'

const HeaderItem: React.FC<IHeaderItemProps> = ({ className, icon, text, background, opacity, alt }): JSX.Element => {
    return (
        <Wrapper className={className} background={background} opacity={opacity}>
            <img src={icon} className='hide-on-small-only' alt={alt}/>
            <span>{text}</span>
        </Wrapper>
    )
}

export default HeaderItem
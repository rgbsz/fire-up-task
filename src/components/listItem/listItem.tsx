import React from 'react'

import { Wrapper, Index, Text } from './listItem.styles'
import { IListItemProps } from './listItem.types'

const ListItem: React.FC<IListItemProps> = ({ index, text }): JSX.Element => {
    return (
        <Wrapper>
            <Index className='hide-on-small-only'>
                {index}
            </Index>
            <Text index={index}>
                <span className='hide-on-med-and-up'>{index}. </span>{text}
            </Text>
        </Wrapper>
    )
} 

export default ListItem
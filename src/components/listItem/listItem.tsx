import React from 'react'

import { Wrapper, Index, Text } from './listItem.styles'
import { IListItemProps } from './listItem.types'

const ListItem: React.FC<IListItemProps> = ({ index, text }): JSX.Element => {
    return (
        <Wrapper>
            <Index>
                {index}
            </Index>
            <Text>
                {text}
            </Text>
        </Wrapper>
    )
} 

export default ListItem
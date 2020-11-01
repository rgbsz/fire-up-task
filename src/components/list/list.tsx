import React from 'react'
import ListItem from '../listItem'
import { ARR_TO_MAP, LIST_LOREM } from './list.consts'

import { Wrapper, Heading } from './list.styles'

const List: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Heading>Title</Heading>
            {
                ARR_TO_MAP.map((item: number) => <ListItem key={item} index={item} text={LIST_LOREM}/>)
            }
        </Wrapper>
    )
}

export default List
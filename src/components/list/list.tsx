import React from 'react'
import ListItem from '../listItem'
import { ARR_TO_MAP, LIST_LOREM } from './list.consts'

import { Wrapper, Heading } from './list.styles'

import Icon from '../../images/Icon.png'

const List: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Heading><img src={Icon}/>Title</Heading>
            {
                ARR_TO_MAP.map((item: number) => <ListItem key={item} index={item} text={LIST_LOREM}/>)
            }
        </Wrapper>
    )
}

export default List
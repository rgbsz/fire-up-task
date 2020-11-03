import React, { useState } from 'react'
import theme from '../../theme'
import BoxButton from '../boxButton'

import { Wrapper, Box, ButtonsWrapper } from './boxes.styles'

const Boxes: React.FC = (): JSX.Element => {
    const [chosenBox, setChosenBox] = useState<number>(1)
    return (
        <Wrapper>
            <div className="myContainer">
                <Box>
                <p>Box {chosenBox}</p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, earum nihil blanditiis velit odio sed voluptates odit a aliquid magni libero. Dolor culpa quisquam magni dolores ipsum expedita quis quae!
                </Box>
                <ButtonsWrapper>
                    <BoxButton top='4rem' left='1rem' onClick={() => setChosenBox(1)} text='1' active={chosenBox === 1 && true} color={theme.colors.yellow}/>
                    <BoxButton top='4rem' right='1rem' onClick={() => setChosenBox(2)} text='2' active={chosenBox === 2 && true} color={theme.colors.red}/>
                    <BoxButton bottom='4rem' right='1rem' onClick={() => setChosenBox(3)} text='3' active={chosenBox === 3 && true} color={theme.colors.green}/>
                    <BoxButton bottom='4rem' left='1rem' onClick={() => setChosenBox(4)} text='4' active={chosenBox === 4 && true} color={theme.colors.photos.orange}/>
                </ButtonsWrapper>
            </div>
        </Wrapper>
    )
}

export default Boxes
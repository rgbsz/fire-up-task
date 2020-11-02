import React, { useState } from 'react'
import BoxButton from '../boxButton'

import { Wrapper, Box } from './boxes.styles'

const Boxes: React.FC = (): JSX.Element => {
    const [chosenBox, setChosenBox] = useState<number>(1)
    return (
        <Wrapper>
            <div className="myContainer">
                <BoxButton top='4rem' left='0' onClick={() => setChosenBox(1)} text='BOX NAME 1'/>
                <BoxButton top='4rem' right='0' onClick={() => setChosenBox(2)} text='BOX NAME 2'/>
                <BoxButton bottom='4rem' right='0' onClick={() => setChosenBox(3)} text='BOX NAME 3'/>
                <BoxButton bottom='4rem' left='0' onClick={() => setChosenBox(4)} text='BOX NAME 4'/>
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
            </div>
        </Wrapper>
    )
}

export default Boxes
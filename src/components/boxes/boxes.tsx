import React, { useState } from 'react'
import BoxButton from '../boxButton'

import { Wrapper, Box } from './boxes.styles'

const Boxes: React.FC = (): JSX.Element => {
    const [chosenBox, setChosenBox] = useState<number>(1)
    return (
        <Wrapper>
            <div className="container">
                <BoxButton top='0' left='0' onClick={() => setChosenBox(1)}/>
                <BoxButton top='0' right='0' onClick={() => setChosenBox(2)}/>
                <BoxButton bottom='0' right='0' onClick={() => setChosenBox(3)}/>
                <BoxButton bottom='0' left='0' onClick={() => setChosenBox(4)}/>
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
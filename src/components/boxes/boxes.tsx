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
                    <p>Text from box {chosenBox}</p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis eius deleniti perferendis dolorum minima quasi natus facere porro quaerat. Iure minus alias soluta aliquid natus minima voluptate, laborum dicta quam in suscipit. Officiis corrupti, modi vel, sunt, corporis eligendi cupiditate suscipit obcaecati eius delectus iure aliquid. Rem unde nemo voluptatum incidunt deleniti sed eligendi sapiente beatae ab dolorum veniam accusantium dolor, temporibus, in explicabo error ex velit, voluptates tempore consequatur doloribus quas aliquid? Adipisci quos molestias esse possimus qui? Odit voluptate neque officiis enim quia voluptas debitis blanditiis delectus nulla voluptatem, quae quod similique iure quis. Aspernatur, repudiandae! Obcaecati.
                </Box>
                <ButtonsWrapper>
                    <BoxButton top='4rem' left='1rem' onClick={() => setChosenBox(1)} text='1' active={chosenBox === 1 && true} color={theme.colors.boxes.yellow}/>
                    <BoxButton top='4rem' right='1rem' onClick={() => setChosenBox(2)} text='2' active={chosenBox === 2 && true} color={theme.colors.boxes.red}/>
                    <BoxButton bottom='4rem' right='1rem' onClick={() => setChosenBox(3)} text='3' active={chosenBox === 3 && true} color={theme.colors.boxes.green}/>
                    <BoxButton bottom='4rem' left='1rem' onClick={() => setChosenBox(4)} text='4' active={chosenBox === 4 && true} color={theme.colors.boxes.blue}/>
                </ButtonsWrapper>
            </div>
        </Wrapper>
    )
}

export default Boxes
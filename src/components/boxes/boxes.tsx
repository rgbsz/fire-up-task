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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, magnam aperiam ea blanditiis neque voluptatibus sint accusantium architecto exercitationem illo? Impedit odio reiciendis odit corporis eveniet explicabo, perspiciatis cupiditate assumenda, officiis inventore hic voluptas natus vel nisi, autem aliquid vitae harum ab. Cum nobis repellendus commodi provident voluptate quis possimus explicabo tempore corrupti officia. Eius mollitia distinctio accusamus libero nostrum soluta iusto, sequi suscipit quis accusantium magni debitis tempora itaque aperiam porro, pariatur rem dicta quasi! Dolor iste accusantium, voluptates possimus dolore earum quaerat architecto exercitationem ullam officia fuga voluptatem corporis iure, error quisquam perspiciatis ipsa provident officiis voluptate. Ipsum dignissimos accusamus necessitatibus modi eveniet mollitia dolores eius exercitationem aliquam repellat ratione alias eum, vero tempora qui praesentium maxime sit obcaecati tenetur voluptatem fugit aliquid minus accusantium. Earum iure alias quo placeat ullam corrupti? Magni natus perferendis ullam ducimus iusto in quod temporibus eum? Fugiat, sapiente cumque suscipit voluptate aperiam fuga eos sint vel eaque dolorum temporibus quasi illum odit nemo necessitatibus quis vero saepe ut ea cupiditate! Voluptas error ut id excepturi cum nostrum accusamus sed laudantium enim exercitationem totam facilis aliquid velit dolor repellat magnam cumque alias inventore, perferendis deleniti fuga? Voluptatibus, expedita modi illo obcaecati laudantium quaerat.
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
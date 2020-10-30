import React from 'react'

import Photos from '../photos'

import { Wrapper } from './footer.styles'

const Footer: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <div className="container">
                <Photos />
            </div>
        </Wrapper>
    )
}

export default Footer
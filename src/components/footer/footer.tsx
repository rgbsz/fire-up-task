import React from 'react'
import GreySection from '../greySection'

import Photos from '../photos'

import { Wrapper } from './footer.styles'

const Footer: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <div className="container">
                <Photos />
                <GreySection />
            </div>
        </Wrapper>
    )
}

export default Footer
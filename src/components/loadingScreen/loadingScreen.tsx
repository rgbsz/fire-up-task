import React from 'react'
import { ILoadingScreenProps } from './loadingScreen.types'

import { Wrapper, Loader } from './loadingScreen.styles'

const LoadingScreen: React.FC<ILoadingScreenProps> = ({ active }): JSX.Element => {
    return (
        <Wrapper active={active}>
            <Loader />
        </Wrapper>
    )
}

export default LoadingScreen
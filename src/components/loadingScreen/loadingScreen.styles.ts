import styled, { keyframes } from 'styled-components'
import { ILoadingScreenProps } from './loadingScreen.types'

export const Wrapper = styled.div<ILoadingScreenProps>`
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    backdrop-filter: blur(2rem);
    position: absolute;
    top: 0;
    left: 0;
    clip-path: polygon(${({ active }) => active ? '0 0, 100% 0, 100% 100%, 0 100%' : '0 0, 0 0, 0 100%, 0 100%'});
    z-index: 4;
    transition: .8s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Animation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
    border: 3px solid transparent;
    border-radius: 50%;
    border-top: 3px solid black;
    width: 50px;
    height: 50px;
    animation: ${Animation} 1s linear infinite; 
` 
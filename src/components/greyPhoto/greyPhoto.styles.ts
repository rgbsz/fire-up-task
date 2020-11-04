import styled from 'styled-components'
import { Side } from './greyPhoto.types'
import leftIcon from '../../images/leftIcon.png'
import rightIcon from '../../images/rightIcon.png'

export const Wrapper = styled.div<{ src: string }>`
    margin-right: 1.8rem;
    position: relative;
    overflow: hidden;
    background: url(${({ src }) => src}) top;
    background-size: cover;
    flex: 1;
    @media only screen and (max-width: 992px) {
        &:last-child {
            margin-right: 0;
        }
    }
    @media only screen and (max-width: 600px) {
        margin-right: 0;
        &:last-child {
            margin-top: 2rem;
        }
    }
`

export const Overlay = styled.div<{ side: Side }>`
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.5);
    clip-path: polygon(${({ side }) => side === 'left' ? '100% 0, 100% 0, 100% 100%, 0 100%' : '0 0, 0 0, 100% 100%, 0 100%'});
    &::after {
        content: url(${leftIcon});
        position: absolute;
        bottom: 0;
        left: 1rem;
        font-size: 3rem;
        display: ${({ side }) => side === 'left' ? 'none' : 'block'};
    }
    &::before {
        content: url(${rightIcon});
        position: absolute;
        bottom: 0;
        right: 1rem;
        font-size: 3rem;
        display: ${({ side }) => side === 'left' ? 'block' : 'none'};
    }
    @media only screen and (max-width: 992px) and (min-width: 601px) {
        clip-path: polygon(${({ side }) => side === 'left' ? '0 0, 100% 0, 100% 100%, 0 0' : '0 0, 100% 0, 0 100%, 0 100%'});
        &::after {
            top: 0;
            left: 1rem;
        }
        &::before {
            top: 0;
            right: 1rem;
        }
    }
    @media only screen and (max-width: 600px) {
        clip-path: polygon(${({ side }) => side === 'left' ? '0 0, 100% 100%, 100% 100%, 0 100%' : '0 0, 100% 0, 0 100%, 0 100%'});
        &::before {
            bottom: 0;
            left: 1rem;
        }
        &::after {
            left: 1rem;
            top: 0;
        }
    }
`
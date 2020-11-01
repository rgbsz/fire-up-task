import styled from 'styled-components'
import { Side } from './greyPhoto.types'

export const Wrapper = styled.div`
    margin-right: 1.8rem;
    position: relative;
    overflow: hidden;
`

export const Image = styled.img`
    height: 100%;
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
        content: '<<';
        position: absolute;
        bottom: 0;
        left: 1rem;
        font-size: 3rem;
        display: ${({ side }) => side === 'left' ? 'none' : 'block'};
    }
    &::before {
        content: '>>';
        position: absolute;
        bottom: 0;
        right: 1rem;
        font-size: 3rem;
        display: ${({ side }) => side === 'left' ? 'block' : 'none'};
    }
`
import styled from 'styled-components'
import { IStyledItemProps } from './headerItem.types'

export const Wrapper = styled.div<IStyledItemProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span {
        position: relative;
        width: 12rem;
        padding: .5rem;
        z-index: 1;
        &::before {
            content: '';
            width: 100%;
            height: 100%;
            background: ${({background}) => background};
            opacity: ${({opacity}) => opacity};
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    @media only screen and (max-width: 992px) {
        flex-direction: column;
        span {
            text-align: center;
        }
    }
    @media only screen and (max-width: 600px) {
        span {
            margin-top: 1rem;
        }
    }
`
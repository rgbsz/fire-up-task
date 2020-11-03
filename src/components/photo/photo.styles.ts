import styled from 'styled-components'
import { IPhotoStyled } from './photo.types'

export const Wrapper = styled.div`
    position: relative;
    @media only screen and (max-width: 992px) {
        margin-bottom: 1rem;
    }
`

export const Content = styled.div<IPhotoStyled>`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 1rem;
    border-top: 5px solid ${({ color }) => color};
    img {
        width: 100%;
    }
`

export const DescribedContent = styled.div<IPhotoStyled>`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    height: 100%;
    position: relative;
    border-top: 5px solid ${({ color }) => color};
    img {
        width: 100%;
    }
    span {
        font-size: 2rem;
        text-align: center;
        p {
            color: ${({ color }) => color};
        }
    }
    @media only screen and (max-width: 992px) {
        flex-direction: row;
        img {
            height: 80%;
            width: auto;
        }
    }
    @media only screen and (max-width: 600px) {
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
                background: rgba(255,255,255,.8);
            }
        }
        img {
            width: 100%;
            height: auto;
        }
    }
`
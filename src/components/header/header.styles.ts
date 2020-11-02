import styled from 'styled-components'

import FirstHeaderImage from '../../images/header_1.png' 

export const Image = styled.div`
    width: 100%;
    height: 40rem;
    background: url(${FirstHeaderImage}) center;
    background-size: cover;
    padding: 6rem 0;
    position: relative;
    .myContainer {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        .row {
            width: 100%;
        }
    }
`

export const Heading = styled.h1`
    margin: 0;
    color: white;
    text-align: center;
`

export const Items = styled.div`

`
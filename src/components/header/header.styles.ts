import { CarouselProvider } from 'pure-react-carousel'
import styled from 'styled-components'
import { IHeaderStyled } from './header.types'

export const Heading = styled.h1`
    margin: 0;
    color: white;
    text-align: center;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
`

export const Items = styled.div`

`

export const StyledCarousel = styled(CarouselProvider)`
    display: flex;
    position: relative;
    height: 40rem;
    .carousel__slider {
        width: 100%;
        ul {
            display: flex;
            position: relative;
            margin: 0;
            transition: .5s;
            li {
                position: relative;
            }
        }
    }
`

export const Content = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    .myContainer {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        padding-bottom: 4rem;
        height: 100%;
        .row {
            width: 100%;
        }
    }
`

export const SlideItem = styled.div<IHeaderStyled>`
    width: 100%;
    height: 40rem;
    background: url(${({ src }) => src}) top;
    background-size: cover;
    display: block;
`
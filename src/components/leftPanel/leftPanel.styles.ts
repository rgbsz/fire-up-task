import styled from 'styled-components'

export const Wrapper = styled.div`
    flex: 1;
    position: relative;
`

export const Content = styled.div`
    position: absolute;
    bottom: 4rem;
    left: 6rem;
    display: flex;
    align-items: center; 
    @media only screen and (max-width: 1250px) {
        left: 2rem;
        bottom: .5rem;
    }
    @media only screen and (max-width: 900px) {
        position: relative;
        top: 0;
        left: 0;
        padding: 8rem 2rem 2rem 2rem;
    }
    @media only screen and (max-width: 650px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const Temp = styled.span`
    font-size: 8rem;
    color: white;
    font-weight: bold;
    @media only screen and (max-width: 1050px) {
        font-size: 6rem;
    }
`

export const Description = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: .5rem;
    margin-left: 1.5rem;
`

export const Name = styled.p`
    font-size: 4rem;
    color: white;
    margin: 0;
    line-height: .9;
    text-transform: capitalize;
    @media only screen and (max-width: 1050px) {
        font-size: 3rem;
    }
`

export const Time = styled.p`
    font-size: 2rem;
    color: white;
    margin: 0;
    @media only screen and (max-width: 1050px) {
        font-size: 1.5rem;
    }
`
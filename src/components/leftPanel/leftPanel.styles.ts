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
`

export const Temp = styled.span`
    font-size: 8rem;
    color: white;
    font-weight: bold;
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
    line-height: .7;
`

export const Time = styled.p`
    font-size: 2rem;
    color: white;
    margin: 0;
`
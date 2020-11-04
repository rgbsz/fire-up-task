import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 25rem;
    background: rgba(0,0,0,.2);
    padding: 3rem 3rem 5rem 3rem;
    backdrop-filter: blur(2rem);
    @media only screen and (max-width: 900px) {
        width: 100%;
    }
`

export const Author = styled.span`
    position: absolute;
    bottom: 1rem;
    left: 3rem;
    font-size: .9rem;
    font-weight: bold;
    color: white;
    a {
        color: white;
        text-decoration: underline;
    }
`

export const Error = styled.p`
    margin: 0;
    font-weight: bold;
`
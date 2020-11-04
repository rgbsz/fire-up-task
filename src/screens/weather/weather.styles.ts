import styled from 'styled-components'

export const Wrapper = styled.div<{ image: string }>`
    margin: 4rem;
    width: calc(100% - 8rem);
    display: flex;
    background: url(${({ image }) => image}) center;
    background-size: cover;
    position: relative;
    box-shadow: 0 0 3rem rgba(0,0,0,.25);
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        margin: 1rem;
        width: calc(100% - 2rem);
    }
`
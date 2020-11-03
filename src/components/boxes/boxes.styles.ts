import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background: #f2f2f2;
    .myContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 7rem 11rem;
    }
    @media only screen and (max-width: 992px) {
        .myContainer {
            padding: 8.8rem 1rem;
        }
    }
    @media only screen and (max-width: 600px) {
        .myContainer {
            padding: 4rem 1rem;
        }
    }
`

export const Box = styled.div`
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    position: relative;
    z-index: 2;
    background: white;
`

export const ButtonsWrapper = styled.div`
    display: flex;
`
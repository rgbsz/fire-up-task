import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background: #f2f2f2;
    .myContainer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7rem 11rem;
    }
`

export const Box = styled.div`
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    position: relative;
    z-index: 2;
    background: white;
`
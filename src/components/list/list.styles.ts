import styled from 'styled-components'

export const Wrapper = styled.div`
    background: white;
    flex: 0 0 23rem;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 992px) {
        margin-top: 2rem;
    }
`

export const Heading = styled.span`
    letter-spacing: .5rem;
    font-size: 1.5rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.lightBlue};
    padding: 1rem!important;
    display: flex;
    align-items: center;
`
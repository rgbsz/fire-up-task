import styled from 'styled-components'

export const Wrapper = styled.div`
    background: red;
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const Heading = styled.span`
    letter-spacing: .5rem;
    font-size: 1.5rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.lightBlue};
    padding: .5rem;
`
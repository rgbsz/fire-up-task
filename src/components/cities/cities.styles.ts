import styled from 'styled-components'

export const Wrapper = styled.div`
    padding: 2rem 0 2.4rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.weather.grey};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const City = styled.button`
    background: transparent;
    border: none;
    padding: 1rem 0;
    color: ${({ theme }) => theme.colors.weather.grey};
    cursor: pointer;
    &:focus {
        background: transparent;
    }
`
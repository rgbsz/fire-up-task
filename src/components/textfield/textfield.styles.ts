import styled from 'styled-components'

export const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: none!important;
    border-bottom: 1px solid ${({ theme }) => theme.colors.weather.grey}!important;
    color: ${({ theme }) => theme.colors.weather.grey};
    &::placeholder {
        color: ${({ theme }) => theme.colors.weather.grey};
    }
    &:focus {
        box-shadow: none!important;
    }
`
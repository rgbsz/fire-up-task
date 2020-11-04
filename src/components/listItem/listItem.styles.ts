import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    margin: 1rem!important;
    position: relative;
    align-items: center;
`

export const Index = styled.span`
    font-size: 2rem;
    margin-right: 1rem;
    position: relative;
    padding: 0 1rem;
    flex-shrink: 0;
    &::after {
        content: '';
        width: 100%;
        height: .6rem;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.colors.blue};
    }
`

export const Text = styled.p<{ index: number }>`
    text-align: justify;
    width: 100%;
    margin: 0;
`
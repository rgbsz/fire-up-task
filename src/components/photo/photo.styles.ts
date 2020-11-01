import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
`

export const Content = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 1rem; 
    img {
        width: 100%;
    }
`

export const DescribedContent = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    height: 100%;
    img {
        width: 100%;
    }
    span {
        font-size: 2rem;
        text-align: center;
    }
`
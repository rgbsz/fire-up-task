import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    @media only screen and (max-width: 992px) {
        margin-bottom: 1rem;
    }
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
    position: relative;
    img {
        width: 100%;
    }
    span {
        font-size: 2rem;
        text-align: center;
    }
    @media only screen and (max-width: 992px) {
        flex-direction: row;
        img {
            height: 80%;
            width: auto;
        }
    }
    @media only screen and (max-width: 600px) {
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img {
            width: 100%;
            height: auto;
        }
    }
`
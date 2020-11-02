import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    padding: .7rem;
    @media only screen and (max-width: 992px) {
        flex-direction: column;
    }
    height: auto;
`

export const GreyPhotosWrapper = styled.div`
    display: flex;
    flex: 1;
    @media only screen and (max-width: 992px) {
        height: 40rem;
    }

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: 50rem;
    }
`
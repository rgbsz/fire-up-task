import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

export const StyledLink = styled(Link)`
    margin: 0 1rem;
    &:last-child {
        margin: 0 0 0 1rem
    }
`
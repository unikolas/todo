import styled from 'styled-components'
import typography from '../constants/typography'

// const Header = (props) => <h1>{props.children}</h1>
const Header = styled.h1`
    ${(props) =>
        props.variant
            ? typography.header[props.variant]
            : typography.header.h2};
    color: ${(props) => props.color};
    margin: 0;
    padding-bottom: 40px;
    @media (max-width: 640px) {
        padding-bottom: 16px;
    }
`

export default Header

import Styled, { css } from 'styled-components'

const variants = {
    default: css`
        padding: ${(props) => (props.p ? props.p : '40px')};

        @media (max-width: 640px) {
            padding: 32px;
        }

        @media (max-width: 400px) {
            padding: 24px 16px;
        }
    `,
    main: css`
        max-width: 480px;
        padding: ${(props) => (props.p ? props.p : '0')};
    `,
}

const Wrapper = Styled.div`
    display: block;
    width: auto;
    max-height: ${(props) => props.maxh};
    min-height: ${(props) => props.minh};
    margin: 0 auto;
    background: ${(props) => props.bc};
    ${(props) => (props.variant === 'main' ? variants.main : variants.default)}
`
export default Wrapper

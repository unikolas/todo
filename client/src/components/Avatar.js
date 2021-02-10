import Styled from 'styled-components'

const sizes = {
    xxxs: 12,
    xxs: 20,
    xs: 32,
    sm: 40,
    md: 56,
    lg: 72,
    xl: 96,
    xxl: 120,
}

const radius = {
    xs: '3px',
    sm: '5px',
    md: '12px',
    lg: '24px',
    round: '100%',
}

const Avatar = Styled.div`
    display: block;
    width: ${(props) => (props.size ? sizes[props.size] : sizes.md)}px;
    height: ${(props) => (props.size ? sizes[props.size] : sizes.md)}px;
    background-color: ${(props) => (props.color ? props.color : '#72849A')};
    border-radius: ${(props) =>
        props.radius ? radius[props.radius] : radius.sm};
    background-image: url(${(props) => props.image});
    background-size: cover;
`

export default Avatar

import { css } from 'styled-components'

const media = []

media.xs = (styles) => {
    return css`
        @media (min-width: 320px) {
            ${styles}
        }
    `
}

media.sm = (styles) => {
    return css`
        @media (min-width: 400px) {
            ${styles}
        }
    `
}

media.md = (styles) => {
    return css`
        @media (min-width: 1024px) {
            ${styles}
        }
    `
}

media.lg = (styles) => {
    return css`
        @media (min-width: 1280px) {
            ${styles}
        }
    `
}
media.xl = (styles) => {
    return css`
        @media (min-width: 1440px) {
            ${styles}
        }
    `
}
media.xxl = (styles) => {
    return css`
        @media (min-width: 1920px) {
            ${styles}
        }
    `
}

export default media

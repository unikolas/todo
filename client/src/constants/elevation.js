import { css } from 'styled-components'

const elevation = {
    e0: {
        default: '0 0 0 rgba(0,0,0,0.0)',
        hover: '0 0 0 rgba(0,0,0,0.0)',
    },
    e100: {
        default: '0 1px 2px rgba(0,0,0,0.15)',
        hover: '0 3px 5px rgba(0,0,0,0.1)',
    },
    e300: {
        default: '0 3px 9px rgba(0,0,0,0.15)',
        hover: '0 3px 9px rgba(0,0,0,0.15)',
    },
    e600: {
        default: '0 23px 31px rgba(0,0,0,0.1)',
        hover: '0 23px 31px rgba(0,0,0,0.1)',
    },
}

function getElevation(elev = 'e100', hover = false) {
    return css`
        box-shadow: ${!hover ? elevation[elev].default : elevation[elev].hover};
        transition: box-shadow 150ms cubic-bezier(0.25, 0.75, 0.5, 1);
    `
}

export default getElevation

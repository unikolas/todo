import { useState } from 'react'
import { motion } from 'framer-motion'
import { css } from 'styled-components'
import colors from '../constants/colors'
import Icon from './Icon'

const Checkbox = (props) => {
    const handleClick = (e) => {
        e.stopPropagation()
        props.onClick
            ? props.onClick(e)
            : alert('Pass onCheck function to Checkbox')
    }

    const checkStyles = {
        display: 'flex',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        border: `3px solid ${colors.grey95}`,
    }

    const checkStylesHover = {
        background: '#ccc',
    }

    const checkContainerStyles = {
        display: 'block',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: props.m ? props.m : '2px 8px 0 0',
    }

    const variants = {
        initial: {
            width: 4,
            height: 4,
        },
        empty: {
            width: 18,
            height: 18,
        },
        emptyHover: { borderColor: colors.grey80 },
        checked: { borderWidth: 0, backgroundColor: colors.primary },
        // checkedHover: { color: colors.primary, border: 8, scale: 1.1 },
    }

    const spring = {
        type: 'spring',
        stiffness: 400,
        damping: 40,
    }

    return (
        <div style={checkContainerStyles}>
            <motion.div
                style={checkStyles}
                className={props.className}
                variants={variants}
                initial='initial'
                whileHover='emptyHover'
                animate={props.isParentHovered ? 'empty' : 'initial'}
                transition={spring}
                onClick={(e) => handleClick(e)}
            >
                {props.isChecked && (
                    <Icon name='check' size={'xs'} color={colors.white} />
                )}
            </motion.div>
        </div>
    )
}

export default Checkbox

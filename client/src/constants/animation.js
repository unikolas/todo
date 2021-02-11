const animation = {
    spring: {
        slow: { type: 'spring', damping: 30, stiffness: 400 },
        default: { type: 'spring', damping: 50, stiffness: 500 },
    },
    curve: {
        default: 'cubic-bezier(.25,.75,.5,1)',
    },
    duration: {
        default: '300ms',

        sm: '100ms',
        md: '300ms',
        lg: '600ms',
    },
}

export default animation

import React from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import './FramerList.css'

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

const items = [0, 1, 2, 4]

export default function App() {
    return (
        <AnimateSharedLayout>
            <motion.ul layout initial={{ borderRadius: 25 }}>
                {items.map((item) => (
                    <Todo key={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    )
}

function Todo() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = () => {
        setIsOpen(!isOpen)
        items.push(4)
    }
    return (
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className='avatar' layout />
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    )
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='row' />
            <div className='row' />
            <div className='row' />
        </motion.div>
    )
}

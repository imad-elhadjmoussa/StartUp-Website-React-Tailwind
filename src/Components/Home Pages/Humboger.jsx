import React from 'react'
import { motion } from 'framer-motion'
export const Humboger = ({ isOpen }) => {
    return (
        <motion.div
            className=' relative w-10 h-7  cursor-pointer'
            animate={isOpen ? 'open' : 'close'}
        >
            <motion.div
                className='  absolute  rounded-full  top-0 w-full h-[0.2rem]  bg-darkGray'
                variants={{
                    open: {
                        top: '50%',
                        y: '-50%',
                        rotate: '45deg'
                    },
                    close: {
                        rotate: 0,
                        top: '0%',
                    }
                }}
            >

            </motion.div>
            <motion.div
                className=' absolute  rounded-full top-[50%] -translate-y-[50%] w-full h-[0.206rem] bg-darkGray'
                variants={{
                    open:{
                        opacity:0,
                    },
                    close:{
                        opacity:1
                    }
                }}
            ></motion.div>
            <motion.div
                className=' absolute  rounded-full bottom-0 w-full h-[0.2rem] bg-darkGray'
                variants={{
                    open: {
                        top: '50%',
                        y: '-50%',
                        rotate: '-45deg'
                    },
                    close: {
                        rotate: 0,
                        bottom: 0,
                    }
                }}
            ></motion.div>
        </motion.div>
    )
}

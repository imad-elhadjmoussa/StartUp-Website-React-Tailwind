import quote from './Images/quote-icon.png'
import React from 'react'
import { motion } from 'framer-motion'

export const ReciewCard = ({ feedback, user, index }) => {
    return (
        <motion.div
            className=' bg-[#e0e1f8] p-6 flex flex-col gap-7  items-start rounded-sm max-w-[400px] md:max-w-[350px]'
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.2,
                    delay: 0.5*(index+1)
                }
            }}
            viewport={{ once: true }}
        >

            <div className='  ' >
                <img src={quote} alt="" />
            </div>
            <div className=' text-2xl font-font1 text-darkGray '>
                {feedback}
            </div>
            <div className=' font-bold font-reboto text-xl'>
                {user}
            </div>

        </motion.div>
    )
}

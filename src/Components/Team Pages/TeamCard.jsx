import { motion } from 'framer-motion'
import React from 'react'

export const TeamCard = ({ photo, name, job, index }) => {
    return (
        <motion.div
            className=' bg-darkGray p-6 flex flex-col  items-center rounded-lg max-w-[400px] md:max-w-[350px] '
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
                y:0,
                opacity: 1,
                transition: {
                    duration: 0.2,
                    delay: 0.4*(index+1),
                }
            }}
            viewport={{ once: true }}
        >

            <div className=' '>
                <img className=' rounded-2xl mb-6 ' src={photo} alt={name} />
            </div>

            <h2 className=' font-reboto text-xl font-bold text-purpel1'>
                {name}
            </h2>

            <p className=' text-gray font-font1 text-lg '>
                {job}
            </p>
        </motion.div>
    )
}

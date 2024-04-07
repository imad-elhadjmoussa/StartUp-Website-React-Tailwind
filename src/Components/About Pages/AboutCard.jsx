import { motion } from 'framer-motion'
import React from 'react'

export const AboutCard = ({ index, icon, content, title }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay:  0.5 * (index + 1),
          duration: 0.3,
          once: true,
        },
      }}
      viewport={{ once: true }}
      className=' bg-darkGray p-6 flex flex-col gap-5 items-center rounded-lg max-w-[400px] md:max-w-[350px] '>
      <div>
        <img src={icon} alt="" />
      </div>
      <h1 className=' sm:text-2xl md:text-xl font-bold font-reboto text-purpel1'>
        {title}
      </h1>
      <p className=' text-center font-font1 text-lg text-gray'>
        {content}
      </p>
    </motion.div>
  )
}

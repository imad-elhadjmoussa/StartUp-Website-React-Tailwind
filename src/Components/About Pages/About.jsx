import React from 'react'
import { header, aboutData } from './data'
import { AboutCard } from './AboutCard'
import { motion } from 'framer-motion'
import { duration } from '@mui/material'

export const About = () => {
    return (
        <div
            className=' w-[90%] mx-auto relative py-32 flex flex-col gap-14 items-center'
        >

            <motion.div

                className=' flex flex-col gap-14 items-center z-10'>
                <motion.p
                    className=' font-font1 text-gray text-lg '
                    initial={{ y: -200, opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.3,
                            duration: 0.2
                        }
                    }}
                    viewport={{ once: true }}
                >
                    WHAT IS IT
                </motion.p>

                <motion.h2
                    className=' font-reboto text-2xl text-purpel1 text-center max-w-[800px] '
                    initial={{ y: -200, opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.4,
                            duration: 0.2
                        }
                    }}
                    viewport={{ once: true }}

                >
                    {header}
                </motion.h2>

                <div className=' flex flex-wrap justify-center gap-5'>
                    {
                        aboutData.map((ele, index) => {
                            return (
                                <AboutCard key={ele.id} index={index} content={ele.content} icon={ele.icon} title={ele.title} />
                            )
                        })
                    }
                </div>
            </motion.div>


            <motion.div
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
                className='  bg-pink-800 blur-3xl absolute size-[400px] top-[25%]  rounded-full'>

            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
                className='  bg-purple-900 absolute size-[400px] top-[50%] right-[15%] blur-3xl  rounded-full'>

            </motion.div>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
                className='   bg-orange-700 absolute size-[400px] top-[50%] left-[15%] blur-3xl  rounded-full'>

            </motion.div>
        </div>
    )
}

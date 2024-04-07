import React from 'react'
import { header, reviews } from './data'
import star from './Images/star-icon.png'
import { motion } from 'framer-motion'
import { ReciewCard } from './ReciewCard'

export const Reviews = () => {
    return (
        <div className=' w-[90%] mx-auto relative py-32 '>

            <div className=' relative flex flex-col gap-14 items-center z-10'>
                <motion.p
                    className=' font-font1 text-gray text-lg '
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            delay: 1
                        }
                    }}
                    viewport={{ once: true }}
                >
                    TESTMONAILS
                </motion.p>

                <motion.h2
                    className=' font-reboto font-bold text-5xl text-darkGray text-center max-w-[800px] '
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            delay: 0.9
                        }
                    }}
                    viewport={{ once: true }}
                >
                    {header}
                </motion.h2>

                <div className=' flex flex-wrap justify-center gap-5'>
                    {
                        reviews.map((ele, index) => {
                            return (
                                <ReciewCard index={index} key={ele.id} user={ele.user} feedback={ele.feedback} />
                            )
                        })
                    }
                </div>
            </div>

            <motion.div
                className=' absolute top-[100px] left-[50px] md:left-[290px] md:top-[90px] size-16 '
                animate={{ rotate: 360 }}
                initial={{ rotate: 0 }}
                transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "linear" }}
            >
                <motion.img
                    src={star} alt=""
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.7
                        }
                    }}
                    viewport={{ once: true }}
                />
            </motion.div>

            <div className=' w-[800px] h-[400px] blur-2xl bg-purple-300 left-[50%] -translate-x-[50%] absolute rounded-full top-[60%] -translate-y-[50%] '>

            </div>

        </div>
    )
}

import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import tergatIcon from './Images/target-icon.png'
import { appContext } from '../../App'

export const FreeTrail = () => {

    const {scrollToSection}=useContext(appContext)

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
                            delay: 0.5
                        }
                    }}
                    viewport={{ once: true }}
                >
                    ARE YOU READY
                </motion.p>

                <motion.h2
                    className=' font-reboto font-bold text-5xl text-darkGray text-center max-w-[800px] '
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            delay: 0.7
                        }
                    }}
                    viewport={{ once: true }}
                >
                    Join The New Movement
                </motion.h2>

                <div className=' flex flex-wrap items-start justify-center gap-5'>

                    <motion.button
                        className=' bg-black text-white text-xl btn font-bold font-font1 rounded-full py-3 px-6'
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.5
                            }
                        }}
                        viewport={{ once: true }}
                        onClick={()=>{scrollToSection('Home')}}
                    >
                        Request A Free Demo
                    </motion.button>

                    <motion.button
                        className='  text-darkGray border border-darkGray hover:border-0 hover:text-white hover:textwhite btn2  text-xl font-bold font-font1 rounded-full py-3 px-6'
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                                delay: 0.8
                            }
                        }}
                        viewport={{ once: true }}
                        onClick={()=>{scrollToSection('Home')}}
                    >
                        Support Us On ProductHint
                    </motion.button>
                </div>
            </div>

            <motion.div
                className=' absolute top-[100px] right-[10%] md:right-[30%] md:top-[100px] size-16 '
                animate={{ x: -30, y: 30 }}
                initial={{ x: 0, y: 0 }}
                transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "linear" }}
            >
                <motion.img
                    src={tergatIcon} alt=""
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 0.5
                        }
                    }}
                    viewport={{ once: true }}
                />
            </motion.div>

        </div>
    )
}

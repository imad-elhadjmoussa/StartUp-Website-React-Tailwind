import React from 'react'
import woman1 from './Images/woman2.png'
import woman2 from './Images/woman3.png'
import userIcon from './Images/user-3d-icon.png'
import fbIcon from './Images/fb3D.png'
import instaIcon from './Images/insta3D.png'
import youtubeIcon from './Images/youtube3D.png'
import { motion } from 'framer-motion'



export const Features = () => {
    return (
        <div className=' w-[90%] mx-auto relative py-48 '>

            <div className=' relative z-10 flex flex-col gap-32'>
                <div
                    className=' flex flex-col sm:flex-row-reverse justify-end gap-10  items-center '>
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.7,
                                duration: 0.3
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <Description text1={"ONE OF A KIND TECHNOLOGY"} text2={"Explore a whole new Universe"} />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.7
                            }
                        }}
                        viewport={{ once: true }}
                        style={{ background: 'linear-gradient(23deg, rgba(255,0,215,1) 0%, rgba(255,191,36,1) 68%, rgba(255,239,0,1) 100%)' }}
                        className=' relative bg-red-200 max-w-[500px] p-3 pb-0 rounded-[50px]  '>
                        <img src={woman1} alt="" />

                        <motion.img
                            className=' w-10 h-20 absolute top-[50%] left-[52%] '
                            src={userIcon}
                            alt=""
                            animate={{ y: -20 }}
                            initial={{ y: 10 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "linear" }}
                        />
                    </motion.div>
                </div>

                <div className=' flex flex-col sm:flex-row justify-start md:gap-32 gap-10   items-center '>
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.7,
                                duration:0.3,
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <Description text1={"POWERFULL & VERSATILE"} text2={"Works on all Social Media Platform"} />
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                delay: 0.7
                            }
                        }}
                        viewport={{ once: true }}
                        style={{ background: 'linear-gradient(146deg, rgba(149,0,255,1) 0%, rgba(255,0,254,1) 50%, rgba(255,234,32,1) 100%)' }}
                        className=' relative bg-red-200 max-w-[500px] p-3 pb-0 rounded-[50px]   '>
                        <img src={woman2} alt="" />

                        <motion.img
                            className=' absolute size-14 top-[10px] md:size-20 md:left-[-80px] md:top-[50px]'
                            src={fbIcon}
                            alt=""
                            animate={{ y: -20 }}
                            initial={{ y: 10 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "linear" }}
                        />
                        <motion.img
                            className=' absolute size-14 top-[150px] md:size-20 md:left-[-50px] md:top-[200px]'
                            src={youtubeIcon}
                            alt=""
                            initial={{ rotate: '0deg' }}
                            animate={{ rotate: ['360deg', '0deg'] }}
                            transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "linear" }}


                        />
                        <motion.img
                            className=' absolute size-14 top-[80px] left-[40px] md:size-20  md:left-[50px] md:top-[100px] '
                            src={instaIcon}
                            alt=""
                            animate={{ x: -20 }}
                            initial={{ x: 10 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", ease: "linear" }}
                        />

                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
                className=' absolute md:top-[15%] top-[2%] left-[0%] -translate-y-[50%] md:left-[45%] -z-0 md:size-[500px] size-[400px] bg-purple-300 blur-2xl rounded-full '>

            </motion.div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        delay: 0.2
                    }
                }}
                viewport={{ once: true }}
                className=' absolute md:top-[55%] top-[45%] left-0 -translate-y-[50%] md:left-[3%] -z-0 md:size-[500px] size-[400px]  bg-yellow-50 blur-2xl rounded-full '>

            </motion.div>

        </div>
    )
}


const Description = ({ text1, text2 }) => {
    return (
        <div className=' flex flex-col gap-4'>
            <p className=' font-font1 text-lg text-gray text-center'>
                {text1}
            </p>

            <h2 className=' font-reboto md:text-[4.5rem] text-[3rem]  font-bold text-center max-w-[450px] '>
                {text2}
            </h2>
        </div>
    )
}

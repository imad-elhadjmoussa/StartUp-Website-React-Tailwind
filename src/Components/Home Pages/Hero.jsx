import React, { useContext, useState } from 'react'
import woman1 from './Images/woman1.png'
import woman2 from './Images/woman1-2.png'
import chatIcon from './Images/chat-3d-icon.png'
import playIcon from './Images/play.png'
import heartIcon from './Images/heart-3d-icon.png'
import { icons } from './Data'
import { Link } from 'react-router-dom'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion } from 'framer-motion'
import { appContext } from '../../App'

export const Hero = () => {

    const { scrollToSection } = useContext(appContext)

    const [toogle, setToogle] = useState(true);

    return (
        <div className=' relative flex flex-col w-full gap-4 items-center  pt-48  '>
            <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                className=' font-font1 text-dark'>
                IT'S TIME FOR
            </motion.p>

            <motion.h1
                className=' text-center font-bold text-5xl md:text-[4.5rem]  font-reboto'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            >
                Startup Website
                <span className='text-center block'>Template</span>
            </motion.h1>
            <div className=' relative  '

            >
                <motion.div
                    className=' p-2 pb-0 rounded-xl  h-[500px]  '
                    initial={{ width: 0 }}
                    animate={{ width: 'auto', transition: { duration: 0.4 } }}

                >
                    {
                        toogle ?

                            <motion.img

                                src={woman1}
                                className=' h-[500px] p-3 pb-0  translate-y-3 rounded-2xl '
                                alt=""
                                style={{ background: 'linear-gradient(146deg, rgba(149,0,255,1) 0%, rgba(232,0,254,1) 33%, rgba(255,0,112,1) 66%, rgba(255,234,32,1) 100%)' }}
                            />
                            :
                            <img src={woman2}
                                className=' w-[350px] h-[500px] translate-y-8 p-3 pb-0 rounded-2xl  md:w-[600px] ' alt=""
                                style={{ background: 'linear-gradient(146deg, rgba(149,0,255,1) 0%, rgba(232,0,254,1) 33%, rgba(255,0,112,1) 66%, rgba(255,234,32,1) 100%)' }}
                            />

                    }
                </motion.div>

                {/* Chat icon */}
                <motion.div
                    className=' absolute md:top-[130px] md:left-[30px] md:size-[90px] size-[50px] top-[110px] left-[10px] '
                    animate={{ y: -30 }}
                    initial={{ y: 30 }}
                    transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "linear" }}
                >
                    <motion.img
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 0.6, ease: "linear" } }}
                        src={chatIcon} alt="" />
                </motion.div>

                {/* play icon */}
                <div
                    onMouseEnter={() => { setToogle(prev => !prev) }}
                    // onMouseLeave={() => { setToogle(true) }}
                    className=' cursor-pointer absolute md:top-[120px] md:right-[10px] md:size-[100px] top-[150px] right-[10px] size-[50px] '>
                    <img src={playIcon} alt="" />
                </div>
            </div>

            {/* heart icon */}
            <motion.div
                className=' absolute top-[100px] left-[50px] size-[50px] md:size-[60px] md:left-[200px] md:top-[120px] '
                animate={{ x: -30 }}
                initial={{ x: 30 }}
                transition={{ repeat: Infinity, duration: 3, repeatType: "reverse", ease: "linear" }}
            >
                <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { duration: 0.6, ease: "linear" } }}
                    src={heartIcon} alt="" />
            </motion.div>

            {/* Socil icons */}
            <motion.div
                className=' absolute top-[25%] left-0 hidden sm:block '
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
                <SoicalIcon />
            </motion.div>

            {/* Scrool Down */}
            <motion.div
                onClick={() => { scrollToSection('About') }}
                className=' cursor-pointer hidden sm:flex absolute right-[-59px]  top-[30%]  rotate-[-90deg] tracking-[5px]   '
                initial={{ opacity: 0, y: -200, rotate: -90 }}
                animate={{ opacity: 1, y: 0, rotate: -90, transition: { duration: 0.2 } }}
            >
                <div className=' rotate-[90deg]   '>
                    <ArrowDownwardIcon />
                </div>
                <p className='font-font1 '>Scroll Dwon</p>
            </motion.div>

        </div>
    )
}


const SoicalIcon = () => {
    return (
        <div className=' flex flex-col gap-3'>
            {
                icons.map((icon) => {
                    return (
                        <div key={icon.id} className=' hover:scale-[1.2] duration-200 transition-all ease-linear '>
                            <a href={icon.link} target="_blank"> {icon.icon} </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
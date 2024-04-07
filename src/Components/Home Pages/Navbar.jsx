import React, { useContext, useEffect, useState } from 'react'
import logo from './Images/vr-logo.png'
import { links, childrenVartion, perantVartion } from './Data'
import { Link } from 'react-router-dom'
import { Humboger } from './Humboger'
import { AnimatePresence, motion } from 'framer-motion'
import { appContext } from '../../App'

export const Navbar = () => {

    const { scrollToSection,setIsOpen,isOpen } = useContext(appContext)

    return (
        <motion.div
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration:0.3}}
            className=' z-50 w-[90%] mx-auto  relative flex justify-between items-center font-font1 font-bold  py-4'>
            {/* Logo */}
            <div className='w-28 h-6 cursor-pointer ' onClick={() => { scrollToSection("Home") }}>
                <img src={logo} alt="VR" />
            </div>

            {/* Humberger Menu */}
            <div
                onClick={() => { setIsOpen((prev) => !prev) }}
                className=' sm:hidden'
            >
                <Humboger isOpen={isOpen} />
            </div>

            {/* Links On Larg Secreen */}
            <ul className=' gap-8 sm:flex hidden items-center'>
                {
                    links.map((link) => {
                        return (
                            <li onClick={() => { scrollToSection(link) }} key={link} className='link cursor-pointer'>
                                {link}
                            </li>
                        )
                    })
                }
                <li className=' whitespace-pre py-2 px-3 rounded-full btn cursor-pointer' onClick={() => { scrollToSection("Free Trailer") }}>
                    Free Trailer
                </li>
            </ul>

            {/* Link on Small Screen */}
            <AnimatePresence>
                {
                    isOpen &&
                    <motion.ul
                        className=' sm:hidden text-white z-30 absolute top-[80px] rounded-lg right-0 left-0 gap-6 flex flex-col py-5 bgGredient2 items-center'
                        variants={perantVartion} initial='hidden' animate='visible' exit='exit'
                    >
                        {
                            links.map((link) => {
                                return (
                                    <motion.li
                                        variants={childrenVartion}
                                        key={link}
                                        className='link2 cursor-pointer'
                                        onClick={() => {setIsOpen(false); scrollToSection(link) }}
                                    >
                                        {link}
                                    </motion.li>
                                )
                            })
                        }
                        <motion.li
                            className='py-2 px-3 text-white hover:bg-black rounded-full cursor-pointer   '
                            variants={childrenVartion}
                            whileHover={{ transition: { duration: 2 } }}
                            onClick={() => { setIsOpen(false); scrollToSection("Free Trailer") }}
                        >
                            Free Trail
                        </motion.li>
                    </motion.ul>
                }
            </AnimatePresence>
        </motion.div>
    )
}

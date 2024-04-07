import { icons, links } from '../Home Pages/Data'
import React, { useContext } from 'react'
import logo from '../Home Pages/Images/vr-logo.png'
import { appContext } from '../../App'
import { motion } from 'framer-motion'

export const Footer = () => {




    return (
        <div className=' w-[90%] mx-auto relative md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-10'>


            <Contacts1 />

            <div className=' flex  gap-8  md:gap-32 '>
                <Contact2 />
                <Links />
            </div>

        </div>
    )
}


const Contacts1 = () => {
    const { scrollToSection } = useContext(appContext);

    return (
        <motion.div
            className=' flex flex-col gap-5 '
            initial={{ y: -200, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 1
                }
            }}
            viewport={{ once: true }}
        >
            <div onClick={() => { scrollToSection('Home') }} className=' w-[120px] cursor-pointer  '>
                <img src={logo} alt="" />
            </div>

            <div className=' flex gap-3'>
                {
                    icons.map((icon) => {
                        return (
                            <div
                                key={icon.id}
                                className=' cursor-pointer text-purpel1 p-3 rounded-full flex justify-center items-center border '
                            >
                                <a href={icon.link} target='_blank'> {icon.icon} </a>
                            </div>
                        )
                    })
                }
            </div>

            <div className=' font-font1 text-lg text-purpel1'>
                &copy; 2024 Build With Slider Revlotion
            </div>
        </motion.div>
    )
}

const Contact2 = () => {
    const title = 'Contact'
    const contact = [
        'info@social.vr',
        '+124 68904',
        '674 OAK MEDOW LANE SOUTH OZANE PARK NY 11420'
    ]
    return (
        <motion.div className=' flex flex-col gap-5'
            initial={{ y: -200, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 1.3
                }
            }}
            viewport={{ once: true }}
        >
            <div className='  font-bold text-3xl font-reboto text-purpel1'>
                {title}
            </div>

            <div className=' flex flex-col gap-2'>
                {
                    contact.map((ele, index) => {
                        return (
                            <div
                                className=' font-font1 max-w-[180px] text-[1.2rem] text-gray '
                                key={index}>
                                {ele}
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

const Links = () => {
    const { scrollToSection } = useContext(appContext);

    const title = 'Sitemap'

    const footerLinks = [...links, "Free Trailer"];
    return (
        <motion.div className=' flex flex-col gap-5'
            initial={{ y: -200, opacity: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    delay: 1.6
                }
            }}
            viewport={{ once: true }}
        >
            <div className='  font-bold text-3xl font-reboto text-purpel1'>
                {title}
            </div>

            <div className=' flex flex-col gap-2'>
                {
                    footerLinks.map((ele) => {
                        return (
                            <div onClick={() => { scrollToSection(ele) }} key={ele} className=' cursor-pointer font-font1 max-w-[200px] text-[1.2rem] text-gray'>
                                {ele}
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}
import { team, header } from './data'
import React from 'react'
import { TeamCard } from './TeamCard'
import thumb from './Images/thumb-3d-icon.png'
import { motion } from 'framer-motion'

export const Team = () => {
    return (
        <div className=' w-[90%] mx-auto relative py-32 '>

            <div className=' flex flex-col gap-14 items-center z-10'>
                <motion.p
                    className=' font-font1 text-gray text-lg '
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            delay: 0.3
                        }
                    }}
                    viewport={{ once: true }}
                >
                    MEET THE TEAM
                </motion.p>

                <motion.h2
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                            delay: 0.4
                        }
                    }}
                    viewport={{ once: true }}
                    className=' font-reboto text-5xl font-bold text-purpel1 text-center max-w-[800px] '>
                    {header}
                </motion.h2>

                <div className=' flex flex-wrap justify-center gap-5'>
                    {
                        team.map((ele, index) => {
                            return (
                                <TeamCard key={ele.id} index={index} name={ele.name} photo={ele.photo} job={ele.job} />
                            )
                        })
                    }
                </div>
            </div>

            <motion.div
                className=' absolute top-[80px] left-[60px] md:top-[100px] md:left-[250px] size-16 '
                animate={{ y: -20 }}
                initial={{ y: 20 }}
                transition={{ repeat: Infinity, duration: 4, repeatType: "reverse", ease: "linear" }}
            >
                <motion.img
                    src={thumb} alt=""
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            delay: 1
                        }
                    }}
                    viewport={{ once: true }}
                />
            </motion.div>

        </div>
    )
}

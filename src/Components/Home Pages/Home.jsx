import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { appContext } from '../../App'

export const Home = () => {
    const { isOpen } = useContext(appContext)



    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

    // Function to update scroll position
    const updateScrollPosition = () => {
        const currentPosition = window.pageYOffset;
        setScrollPosition(currentPosition);
        const navbar = document.getElementById('Navbar');
        scrollPosition > 100 ? navbar.classList.add("bg") : navbar.classList.remove('bg');
    };
    useEffect(() => {

        window.addEventListener('scroll', updateScrollPosition);
    }, [scrollPosition]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='  relative '>

            {/* Navbar */}
            <div
                id='Navbar'
                className='  fixed top-0 z-40 w-[100vw]'
            // style={{ right: 'calc(10%/2)', left: 'calc(10%/2)' }}
            >
                <Navbar />
            </div>

            {/* Hero Section */}
            <div className=' w-[90%] mx-auto' style={{ filter: isOpen ? 'blur(2px)' : 'blur(0px)' }} >
                <Hero />
            </div>
        </div>
    )
}

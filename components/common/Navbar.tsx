import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { CartIcon, UserIcon } from './Icons';

interface Props {
    href: string;
    text: string;
    toggle?: () => void;

}

const NavigationLink = ({ href, text }: Props) => (
    <motion.a
        className='text-[#216B39] text-lg'
        href={href}
        whileHover={{ y: -2, color: '#FAEDCD' }}
        whileTap={{ scale: 0.9 }}
        style={{ margin: '0 16px' }}

    >
        {text}
    </motion.a>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className='absolute top-0 w-full h-24 bg-primaryGreen'>
            <header className='w-full px-44 py-0 font-medium '>

                <button className='absolute top-11 left-6 flex-col justify-center items-center xl:hidden lg:hidden' onClick={handleClick}>
                    <span className={`bg-darkGreen block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-darkGreen block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-darkGreen block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>

                <div className='flex mt-[-36px] md:w-full md:flex md:items-center md:justify-end sm:justify-end sm:w-40 sm:h-40 xs:hidden'>
                    <Logo />
                </div>

                <div className='w-full flex justify-around items-center mt-[-130px] xl:mx-56 lg:mx-52 mx-36'>
                    <nav className='flex items-center space-x-4 md:hidden sm:hidden xs:hidden'>
                        <NavigationLink href='#about' text='Sobre nosotros' />
                        <NavigationLink href='#' text='Productos' />
                    </nav>
                    <nav className='flex items-center space-x-4 md:hidden sm:hidden xs:hidden'>
                        <motion.a href="/" target='_blank' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
                        >
                            <UserIcon width={40} height={40} className='stroke-darkGreen hover:fill-primaryBrown' />
                        </motion.a>
                        <motion.a href='/' target='_blank' whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
                            <div className='border-2 rounded-full border-darkGreen bg-transparent w-[37px] h-[37px] hover:bg-primaryBrown
                            '>
                                <CartIcon width={25} height={25} itemCount={3} className='fill-darkGreen ml-[1.50px] mt-1' />
                            </div>
                        </motion.a>
                    </nav>
                </div>

                {
                    isOpen ?
                    
                        <motion.div
                            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                            animate={{ scale: 1, opacity: 1, transition: { 2: 2 } }}
                            className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-primaryGreen/70 rounded-lg backdrop-blur-md py-32'>
                            <nav className='flex items-center flex-col justify-center'>
                                <NavigationLink href="#about" text="Sobre nosotros" toggle={handleClick} />
                                <NavigationLink href="#" text="Productos" toggle={handleClick} />
                            </nav>
                            <nav className='flex items-center space-x-2 mt-4'>
                                <motion.a
                                    href="/"
                                    target='_blank'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='sm:mx-1'
                                >
                                    <UserIcon width={40} height={40} className='stroke-darkGreen hover:fill-primaryBrown' />
                                </motion.a>

                                <motion.a
                                    href="/"
                                    target='_blank'
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='sm:mx-1'
                                >
                                    <div className='border-2 rounded-full border-darkGreen bg-transparent w-[37px] h-[37px] hover:bg-primaryBrown
                            '>
                                        <CartIcon width={25} height={25} itemCount={3} className='fill-darkGreen ml-[1.50px] mt-1' />
                                    </div>
                                </motion.a>
                            </nav>
                        </motion.div>
                        : null
                }
            </header>
        </div>
    );
}

export default Navbar;

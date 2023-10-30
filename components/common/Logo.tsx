import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/masVidaLogo.png';


const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center">
            <MotionLink href="/" passHref>
                <motion.div
                    initial={{ rotateY: 0 }}
                    whileHover={{ rotateY: 360, scale: 0.5 }}
                >
                    <Image src={logo} alt="Logo" width={200} height={200} />
                </motion.div>
            </MotionLink>
        </div>
    );
};

export default Logo;

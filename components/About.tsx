import React from 'react'
import Image from 'next/image'
import masVidaLogo from '../public/+Vida.png'


const About = () => {
    return (
        <div id='about' className='flex justify-center items-center h-screen w-full mt-16 mb-0'>
            <div className="w-1/2 md:w-3/4 sm:w-3/4 xs:w-3/4 h-auto rounded overflow-hidden shadow-lg">
                <Image className="w-full h-auto " src={masVidaLogo} alt="Mas Vida Logo" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default About
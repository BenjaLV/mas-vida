import React from 'react'
import Image from 'next/image'
import masVidaLogo from '../public/+Vida.png'
import CarouselReact from './common/Carousel'


const About = () => {
    return (
        <div id='about' className='relative flex justify-center items-center h-screen w-full'>
            <div className="absolute w-1/2 sm:w-full xs:w-full h-auto m-auto top-24 left-0 bottom-0 right-0 rounded overflow-auto shadow-lg">
                <CarouselReact className='w-1/2 h-auto mx-auto mt-8' />
                {/* <Image className="w-full h-auto " src={masVidaLogo} alt="Mas Vida Logo" /> */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor ratione excepturi optio quia, veritatis, repudiandae vel et, earum enim dicta iusto ad ipsam explicabo suscipit unde. Veritatis, enim illum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, in. Sequi sapiente iste doloremque, fuga officiis ipsam ad tempore nam dicta nulla doloribus repellat ducimus, quia beatae laborum sint? Reiciendis?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, eius itaque fugiat voluptatem aspernatur quo soluta, facere possimus sequi quis ea tempore deleniti laboriosam porro excepturi natus cumque consequatur quaerat.
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default About
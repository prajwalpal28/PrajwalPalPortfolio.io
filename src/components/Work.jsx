import React from 'react'
import Pro1 from '../assets/Pro1.png'
import Pro2 from '../assets/Pro2.png'
import Pro3 from '../assets/Pro3.png'

const Work = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5 ' id='work'>
            <div className='pb-8'>
                <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
                <p className='text-gray-400'>Lets build something awesome</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div className='flex flex-col transform transition-transform duration-300 hover:scale-105  overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-top items-center h-[500px] bg-cover relative'>

                    <div className='flex flex-col transform transition-transform duration-300 hover:scale-105 overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                        <img src={Pro1} alt="Project 1" />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/prajwalpal28/Sundown_Studio-Animated-Website" target='_blanck'>
                                    <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='text-white'>
                        <h2 className='primary-color font-bold text-xl'>Sundown Studio - Animated Website</h2>
                        <p className='sm:text-base lg:text-base'>
                            Animated website project combines HTML, CSS, and JavaScript to create a visually stunning and interactive experience. With smooth animations, responsive design, and engaging functionalities like sliders and modals, it captivates visitors and showcases the power of front-end web technologies.</p>
                    </div>
                </div>

                <div className=' flex flex-col transform transition-transform duration-300 hover:scale-105 overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-top items-center h-[500px] bg-cover relative '>

                    <div className=' flex flex-col transform transition-transform duration-300 hover:scale-105 overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative'>
                        <img src={Pro2} alt="Project 1" />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a href="https://netfix-clone-sigma.vercel.app/" target='_blanck'>
                                    <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <h2 className='primary-color font-bold text-xl'>Video streaming website</h2>
                        <p className='sm:text-base lg:text-base'>
                            Video streaming website, built using HTML, CSS, and JavaScript, offers a seamless viewing experience with visually appealing designs, responsive layouts, and dynamic functionalities like video playback controls and search filters. It demonstrates the effective integration of front-end technologies for an engaging video streaming platform.</p>
                    </div>
                </div>


                <div className='flex flex-col transform transition-transform duration-300 hover:scale-105 overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-top items-center h-[500px] bg-cover relative'>

                    <div className='flex flex-col transform transition-transform duration-300 hover:scale-105 overflow-hidden shadaw-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative '>
                        <img src={Pro3} alt="Project 1" />

                        <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'></span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/prajwalpal28/Amazon_clone" target='_blanck'>
                                    <button className='text-center rounded-lg px-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <h2 className='primary-color font-bold text-xl'>E-commerce website</h2>
                        <p className='sm:text-base lg:text-base'>
                            E-commerce website project leverages front-end libraries like Bootstrap to create a visually appealing and user-friendly online shopping experience. With responsive designs, interactive product catalogs, smooth navigation, and secure checkout processes, it offers customers a seamless platform to browse, shop, and make purchases. This project showcases the power of front-end technologies and libraries in building a modern and functional e-commerce platform.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work
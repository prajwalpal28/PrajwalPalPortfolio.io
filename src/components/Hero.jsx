// import React from 'react'
import pro from '../assets/pro.png'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black' id='Hero'>

            <div className='col-span-1 my-auto mx-auto  md:flex gap-5'>

                <div className='col-span-1 my-auto mx-auto w-[400px] h-auto lg:w-[400px]'>
                    <img src={pro} alt="ProfilPic" />
                </div>
            </div>

            <div className='col-span-2 px-5 my-auto'>

                <h1 className='text-white text-4xl sm:text-2xl lg:text-6xl font-extrabold'>
                    <span>
                        I&apos;m a
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Engineering Students",
                            2000,
                            "Frontend Web Dev",
                            2000,
                            "Passionate Programmer",
                            2000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl'>A front-end Developer based in India, I have strong passion for UI effects, animations and creating intuitive.</p>

                <div className='my-8'>
                    <a href="https://drive.google.com/file/d/1BX4OAKLSA9Z8L35ODXEufRqq2Z9OSD-r/view?usp=drive_link" target="_blank"className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white '>
                        See my resume
                    </a>

                    <a href="#contact" className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
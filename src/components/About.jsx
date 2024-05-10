import React from 'react'
import emo from '../assets/emo.jpg'

const About = () => {
    return (
        <div className='text-white max-w-[1200px]   mx-auto my-12' id='about'>
            <div className='md:flex md:justify-between sm:py-16 '>

                <div className='mt-4 md:mt-0 text-left flex '>

                    <div className='my-auto mx-6'>
                        <h2 className='text-4xl font-bold md-4 primary-color'>About Me</h2>
                        <p className='text-base lg:text-lg para-color'>
                            Who I am and what I do.
                        </p>

                        <p className='sm:text-lg my-6 lg:text-lg'>
                            <span className='text-gray-600 font-extrabold'>Who I am</span> <br />
                            <span className='font-thin'>I am a software developer...</span>
                            <div className='mb-2'></div>
                            <br />
                            <span className='text-gray-600 font-extrabold'>What I do</span> <br />
                            <span className='font-thin'>I develop software...</span>
                            <div></div>
                            <br />

                            Feel free to reach out via <a className='underline' href="https://palprajwal18@gmail.com" target="_blank">E-mail</a>, or follow me on <a className='underline' href="https://x.com/Prajwalpal18?t=ghEA2Wf72otTpK8xAPQSDA&s=09" target="_blank">Twitter</a>. Want to see where I’ve worked? <br /> Check out my <a className='underline' href="https://docs.google.com/document/d/1jYKtVvTc9uPZQaDnjXndf1LH5MIvDyTzuSwS_929FzQ/edit?usp=sharing" target="_blank">Resume</a>, or Connect with me on <a className='underline' href="https://www.linkedin.com/in/prajwalpal28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">Linkedin</a>.
                        </p>
                    </div>

                </div>

                <img src={emo} alt="About" />
            </div>
        </div>
    )
}

export default About
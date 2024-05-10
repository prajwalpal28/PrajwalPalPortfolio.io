import React from 'react'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import js from '../assets/js.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'


const Skills = () => {
    return (

        <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-item-center md:flex md:justify-between md:items-center mx-auto' id='skills'>


            <h2 className='primary-color text-2xl md:text-4xl font-blod m-4 '>
                My Tech Stack
            </h2>
            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={react} alt="" />
                <p className='mt-2'>React JS</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={js} alt="" />
                <p className='mt-2'>Javascript</p>
            </div>


            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={html} alt="" />
                <p className='mt-2'>HTML</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={css} alt="css" />
                <p className='mt-2'>CSS</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={tailwind} alt="" />
                <p className='mt-2'>Tailwind</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={bootstrap} alt="" />
                <p className='mt-2'>Bootstrap</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={c} alt="" />
                <p className='mt-2'>C</p>
            </div>

            <div className='flex flex-col item-center m-4 sm:my-0 w-[60px] md:w-[100px] text-center'>
                <img src={cpp} alt="" />
                <p className='mt-2'>C++</p>
            </div>


        </div>
    )
}

export default Skills
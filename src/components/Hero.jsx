import React from 'react'
import {FaArrowDown, FaArrowUp, FaGithubSquare,FaInstagram,FaLinkedin,FaTwitterSquare,FaYoutubeSquare} from 'react-icons/fa'
import heroImg from "../assets/hero.svg"
import ScrollDown from './ScrollDown'
import ScrollUp from './ScrollUp'

const Hero = () => {
  return (
    <div className='bg-green-200 py-8'>
        <div className="align-element grid md:grid-cols-2 items-center gap-8">
            <article>
                <h1 className='text-7xl font-bold tracking-wide'>I'm Isaie </h1>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
                    Frontend Developer
                </p>
                <p className='mt-6 capitalize tracking-wider text-lg text-slate-800'>Crafting seamless interfaces, where design meets functionality.
                Turning code into captivating user experiences.</p>
                <div className='flex gap-x-4 mt-4'>
            <a href="github.com/mugishaisaie">
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="https://www.linkedin.com/in/mugisha-isaie-35726a249/">
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="https://x.com/Mugishaisaieog">
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="https://www.instagram.com/muugishaisaie/">
                <FaInstagram className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
            <a href="https://www.youtube.com/@IsaiMugisha">
                <FaYoutubeSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300'/>
            </a>
        </div>
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} alt="hero img" className='h-80 rounded-full  lg:h-96' />
            </article>
        </div>
       
    
      
    </div>
  )
}

export default Hero

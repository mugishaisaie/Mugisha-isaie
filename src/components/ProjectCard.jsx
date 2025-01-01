import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'
import { TbBrandGithub, TbWorldWww } from 'react-icons/tb'

const ProjectCard = ({url,github,title,image,text}) => {
  return (
    <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
      <img src={image} alt={title}  className='w-full object-cover rounded-t-lg h-64'/>
      <div className='p-8 capitalize'>
        <h2 className='font-bold capitalize text-xl tracking-wide'>{title}</h2>
        <p className='mt-6 text-slate-700 leading-loose'>{text}</p>
        <div className="mt-4 flex gap-x-4">
            <a href={url}>
                <TbWorldWww className="w-8 h-8 text-slate-600 hover:text-black duration-300"/>
            </a>
            <a href={github}>
                <FaGithubSquare className="w-8 h-8 text-slate-600 hover:text-black duration-300"/>
            </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard

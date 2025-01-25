import React from 'react'
import { FaArrowDown, FaArrowUp, FaGithubSquare } from 'react-icons/fa'
import { TbBrandGithub, TbWorldWww } from 'react-icons/tb'
import ScrollDown from './ScrollDown'
import ScrollUp from './ScrollUp'
import ScrollPage from './ScrollPage'

const ProjectCard = ({ url, github, title, image, text }) => {
  return (
    <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl duration-300 border border-gray-200">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white">
        <h2 className="font-bold text-xl tracking-wide text-gray-800">{title}</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">{text}</p>
        <div className="mt-6 flex gap-4">
          <a
            href={url}
            className="text-slate-600 hover:text-blue-600 duration-300"
            title="View Live Project"
          >
            <TbWorldWww className="w-8 h-8" />
          </a>
          <a
            href={github}
            className="text-slate-600 hover:text-blue-600 duration-300"
            title="View Code on GitHub"
          >
            <FaGithubSquare className="w-8 h-8" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard

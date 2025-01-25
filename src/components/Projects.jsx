import React from 'react'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
const Projects = () => {
  return (
    <section className='bg-green-200 py-20 align-element' id='projects'>
        <SectionTitle text="Web Creation Projects" />
        <div className="py-16  grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project)=>{
                return <ProjectCard key={project.id} {...project}/>
            })}
        </div>

      
    </section>
  )
}

export default Projects

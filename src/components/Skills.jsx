import React from 'react'
import { skills } from '../data'
import SkillsCard from './SkillsCard'
import SectionTitle from './SectionTitle'

const Skills = () => {
  return (
    <section className='bg-green-200 w-full py-10 align-element' id='skills'>
        <SectionTitle text="TeckStack Skills"/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill)=>{
                return <SkillsCard key={skill.id} {...skill} />
            })}
        </div>
      
    </section>
  )
}

export default Skills

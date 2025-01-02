import React from 'react'
import aboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-emerald-100 py-10'id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about image" className='h-80 rounded-full  lg:h-96'/>
      <article>
    <SectionTitle text="About Me"/>
    <p className='text-slate-600 mt-8 leading-loose'>
    Frontend Developer with over 3 years of experience in creating responsive and
engaging web applications. Skilled in Frontend and Basics on Backed Web
development Skills such as JavaScript, ReactJS, and HTML/CSS,Bootstrap,
Tailwind CSS, PHP and SQL with a proven track record of coaching junior
developers and optimizing web performance to enhance user experience.
Passionate about building user-friendly applications that bring ideas to life,
with experience in both educational and corporate settings Highly capable
Front End Developer offering multilingual programming, system monitoring
and maintenance prowess. Constantly automated build, deployment, and
integration processes, increasing team productivity 100%. Expert developer
well-versed in Agile and Scrum methodologies.
    </p>
      </article>
      </div>
    </section>
  )
}

export default About

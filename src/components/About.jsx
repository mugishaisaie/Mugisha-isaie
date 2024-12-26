import React from 'react'
import aboutImg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20'id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about iamage" className='w-full h-64'/>
      <article>
    <SectionTitle text="About Me"/>
    <p className='text-slate-600 mt-8 leading-loose'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus rem deserunt sit nostrum ducimus eos ea cum doloribus nemo unde, ad, optio cupiditate repellendus quisquam consequatur ipsa sunt suscipit voluptates eligendi vero aliquam dolorum non facilis? Illum unde aliquid eius soluta sed ipsam adipisci ducimus, sit porro, reprehenderit iure eveniet quae inventore earum laboriosam ut non aspernatur quisquam obcaecati quaerat excepturi architecto! Inventore, voluptate quidem suscipit nemo dolore placeat similique distinctio omnis sed quaerat velit facilis tempora? Beatae, earum voluptate fugiat odio eveniet dolore nostrum quisquam impedit sit incidunt provident dolores ad officia odit accusantium necessitatibus aperiam culpa blanditiis voluptates. Perspiciatis ipsa temporibus accusamus veniam? Iste laborum eius dolores, ipsum obcaecati assumenda provident optio dolorem deleniti ipsa itaque deserunt.
    </p>
      </article>
      </div>
    </section>
  )
}

export default About

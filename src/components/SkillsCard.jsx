import React from 'react'

const SkillsCard = ({icon,title,text}) => {
  return (
    <article>
      <span className='mb-50'>{icon}</span>
      <h3 className='mt-4 font-bold'>
        {title}
      </h3>
      <p className='mt-3 text-slate-500'>{text}</p>
    </article>
  )
}

export default SkillsCard

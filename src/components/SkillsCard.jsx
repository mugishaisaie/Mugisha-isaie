import React from 'react'

const SkillsCard = ({icon,title,text}) => {
  return (
    <article className="p-4 flex flex-col items-center text-center">
    <span className="m-4">{icon}</span>
    <h3 className="mt-4 font-bold">{title}</h3>
    <p className="mt-3 text-slate-700">{text}</p>
  </article>
  )
}

export default SkillsCard

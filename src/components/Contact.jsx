import React from 'react'
import { FaEnvelope, FaPhoneSquare, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <section className='align-element bg-emerald-100 align-element py-20' id='Contact'>
        <SectionTitle text="You can Reach me Immediately By" />

    <div className=' w-full grid '>
      <div>
        <p className='my-5'>Call me</p>
        <span className='flex justify-center items-center'><FaPhoneSquare className='h-16 w-16 text-blue-950 ' /><p> +250 790025794 / +250 79 0085437</p></span>
      </div>
      <div>
        <p className='my-5 font-serif font-medium'>WhatsApp me</p>
        <span className='flex text-center justify-center items-center'> <FaWhatsapp className='h-16 w-16 text-blue-950'/><p>+250 790025794 / +250 79 0085437</p></span>
      </div>
      <div>
        <p className='my-5'>Email me</p>
        <span className='flex text-center justify-center items-center'><FaEnvelope className='h-16 w-16 text-blue-950'/><p>mugishaisaieog1@gmail.com</p></span>
      </div>
      
    </div>
    </section>
  )
}

export default Contact

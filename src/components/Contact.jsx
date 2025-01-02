import React from 'react'
import { FaEnvelope, FaPhoneSquare, FaWhatsapp } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <section className=' bg-emerald-100  py-20' id='Contact'>

        <p className='text-center text-slate-800 text-3xl underline uppercase mb-4'>You can Reach me Immediately By </p>
    <div className='align-element w-full grid grid-cols-1 gap-4 sm:grid-cols-3 '>
      <div className='flex flex-col content-center items-center'>
        <p className='my-2 ml-0 uppercase text-slate-950 font-sans font-medium'>Call me</p>
        <span className='flex justify-center items-center '><FaPhoneSquare className='h-5 w-5 text-blue-950 ' /><p> +250 790025794</p></span>
      </div>
      <div className='flex flex-col content-center items-center'>
        <p className='my-2 ml-0 uppercase text-slate-950 font-sans font-medium'>WhatsApp me</p>
        <span className='flex text-center justify-center items-center'> <FaWhatsapp className='h-5 w-5 text-blue-950'/><p>+250 790025794</p></span>
      </div>
      <div className='flex flex-col content-center items-center'>
        <p className='my-2 ml-0 uppercase text-slate-950 font-sans font-medium'>Email me</p>
        <span className='flex text-center justify-center items-center'><FaEnvelope className='h-5 w-5 text-blue-950'/><p>mugishaisaieog1@gmail.com</p></span>
      </div>
      
    </div>
    </section>
  )
}

export default Contact

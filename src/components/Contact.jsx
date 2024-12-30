import React from 'react'
import { FaPhoneSquare } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

const Contact = () => {
  return (
    <section className='align-element py-20'>
        <SectionTitle text="You can Reach me Immediately By" />

    <div>
      <div>
        <p>Call/WhatsApp me</p>
        <span></span>
      </div>
      <div>
        <p>Email me</p>
        <span></span>
      </div>
      
    </div>
    </section>
  )
}

export default Contact

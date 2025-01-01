"use client"
import React from 'react'
import ContactHeader from '../components/ContactHeader'
import GeneralInfo from '../components/GeneralInfo'
import ContactForm from '../components/ContactForm'

function page() {
  return (
    <div>
        <ContactHeader />
        <GeneralInfo />
        <ContactForm />
    </div>
  )
}

export default page
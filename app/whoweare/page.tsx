"use client"
import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutInfo from '../components/AboutInfo'
import OurValues from '../components/OurValues'

function page() {
  return (
    <div className='flex flex-icons flex-col'>
      <AboutHeader />
      <AboutInfo />
      <OurValues />
    </div>
  )
}

export default page
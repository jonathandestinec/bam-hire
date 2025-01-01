"use client"
import React from 'react'
import { motion } from 'framer-motion'
function ContactHeader() {
  return (
    <div className='bg-[url(/images/contactbanner.jpg)] bg-no-repeat bg-cover bg-center h-[calc(100vh-100px)] flex  items-center'>
          <div className='ml-[20px] md:ml-[50px]  text-white'>
        <motion.h1
        initial={{
              x:-100,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        className='text-7xl font-bold'>Contact Us</motion.h1>
        <motion.p
        initial={{
              x:-100,
              opacity:0
            }}
            animate={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut",
              delay: 0.05
            }}
        className='text-xl'>Get in touch with us for inquiries or support!</motion.p>
        </div>
    </div>
  )
}

export default ContactHeader
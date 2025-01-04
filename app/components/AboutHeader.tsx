"use client"
import React from 'react'
import { motion } from 'framer-motion'
function AboutHeader() {
  return (
    <div className='bg-[url(/images/compass.jpg)] md:h-[calc(50vh-100px)] h-[calc(70vh-100px)] w-full bg-center bg-no-repeat bg-cover  flex items-center text-white justify-end '>
      <div className='mr-[20px] md:mr-[50px] text-end'>
        <motion.h1
          initial={{
            x: 100,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut"
          }}
          className='text-7xl font-bold'>Who We Are</motion.h1>
        <motion.p
          initial={{
            x: 100,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: 0.05
          }}
          className='text-xl'>The Drive for Mutual Benefit</motion.p>
      </div>
    </div>
  )
}

export default AboutHeader
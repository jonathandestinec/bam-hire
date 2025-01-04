"use client"
import React from 'react'
import { motion } from 'framer-motion'
function AboutInfo() {
  return (
    <div className='p-[20px] md:p-[50px] bg-white'>
      <motion.h1
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className='text-4xl font-bold'>Over 20 years of shaping careers and lives:</motion.h1>
      <motion.p
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className='text-xl py-[20px]'>At BAM Hire, we pride ourselves on delivering a superior level of service, drawing on extensive sales and recruiting expertise combined with real-world delivery experience.
        This powerful blend enables us to vet candidates more thoroughly than industry competitors, ensuring we address our clients' most pressing challenges with top talent.
      </motion.p>
      <motion.p
        initial={{
          y: 100,
          opacity: 0
        }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut"
        }}
        className='text-xl py-[20px]'>We’re dedicated to helping people achieve success every day, providing our clients with trusted solutions and our consultants with fulfilling career paths.
        Founded on the simple idea of serving friends, our tight-knit team operates with integrity, collaboration, and a passion for producing exceptional results that genuinely impact lives and careers.
      </motion.p>
    </div>
  )
}

export default AboutInfo
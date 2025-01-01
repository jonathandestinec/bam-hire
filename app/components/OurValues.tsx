"use client"
import React from 'react'
import { motion } from 'framer-motion'
function OurValues() {
  return (
    <div className='p-[20px] md:p-[50px] bg-[#4d758f] text-white'>
    <motion.h1
    initial={{
              y:100,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
    className='text-4xl'>Our Values</motion.h1>
    <div className='valuegrid'>
        <motion.div
        initial={{
              y:100,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        className='flex flex-col items-start'>
            <img src="/images/transparency.webp" alt="transparency" />
            <h1 className='my-[20px] text-3xl'>Transparency</h1>
            <p className='text-xl'>We believe in open, honest communication, fostering trust with our clients and candidates through every step of the hiring process.</p>
        </motion.div>
        <motion.div
        initial={{
              y:100,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        className='flex flex-col items-start'>
            <img src="/images/authenticity.webp" alt="transparency" />
            <h1 className='my-[20px] text-3xl'>Authenticity</h1>
            <p className='text-xl'>Staying true to who we are, we build genuine relationships that reflect our commitment to serving others with integrity.</p>
        </motion.div>
        <motion.div
        initial={{
              y:100,
              opacity:0
            }}
            whileInView={{
              y:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        className='flex flex-col items-start'>
            <img src="/images/resilience.webp" alt="transparency" />
            <h1 className='my-[20px] text-3xl'>Resilience</h1>
            <p className='text-xl'>Driven by a passion to make a difference, we face challenges head-on, adapting and persevering to create lasting success for those we serve.</p>
        </motion.div>
    </div>
    </div>
  )
}

export default OurValues
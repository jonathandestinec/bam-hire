"use client"
import React from 'react'
import { motion } from 'framer-motion'
function ContactForm() {
  return (
    <div className='p-[20px] md:p-[50px] flex-col md:flex-row flex  justify-between  bg-white'>
        <motion.img
        initial={{
              x:-50,
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        src="/images/contactform.jpg" alt="contactform" className='w-full md:w-[45%] object-cover mb-[20px]' />
        <motion.div
        initial={{
              x:50,
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            viewport={{
              once:true
            }}
            transition={{
              duration:0.7,
              ease:"easeInOut"
            }}
        className='w-full md:w-1/2'>
            <h1 className='text-3xl'>Leave us a Message</h1>
            <p className='text-xl my-[20px]'>The Bam-Hire team is dedicated to helping you achieve your goals through our expertise in consulting, direct placement, staff augmentation, and contract-to-hire services. Reach out today, and let’s create tailored solutions that propel your business forward.</p>
            <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col items-start w-full'>
                <input className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='Company Name' />
                <input className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='Industry' />
                <input className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="email" placeholder='Email' />
                <input className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' type="text" placeholder='HR Contact Info' />
                <textarea className='outline-none border-b-[#00283c] border-b-[2px] mb-[20px] p-[10px] w-full' name="notes" id="notes" placeholder='Notes' />
                <button className='bg-[#00283c] text-white p-[15px] rounded-[5px]'>Submit</button>
            </form>
        </motion.div>
    </div>
  )
}

export default ContactForm
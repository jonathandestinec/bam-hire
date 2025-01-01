"use client"

import React ,{useState} from 'react'
import { RiMenu3Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion';
const JobSeekersMenu = ["Search Jobs", "In-House Team", "Consultants", "Be The Light Tour"]
const AboutMenu = ["Who We Are", "Office Locations", "Our Impact"]


function Nav() {
    const [showJobSeekerMenu, setShowJobSeekerMenu] = useState(false)
    const [showAboutMenu, setShowAboutMenu] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='relative bg-[#00223a] text-white h-[80px] md:h-[100px]  flex items-center py-8 justify-between px-10 box-border'>
        <h1>Logo</h1>
        <ul className='hidden nav-ul:flex items-center justify-between  w-[50%]'>
            <a href="#"><li className='flex items-center cursor-pointer'>Home</li></a>
            <div className='relative'>
            <li onClick={()=>{setShowJobSeekerMenu(!showJobSeekerMenu); setShowAboutMenu(false)}} className='flex items-center cursor-pointer'>Job Seekers <motion.span  initial={{rotate:"0deg"}} animate={{rotate:`${showJobSeekerMenu?"180deg":"0deg"}`}} transition={{ease:"easeInOut"}}><IoIosArrowDown className='mx-[5px]'  /></motion.span></li>
            {showJobSeekerMenu && <div className='absolute flex flex-col z-10 bg-[#00283c] top-[100%] left-[-20%] w-[200px] p-[20px] rounded-bl-[10px] rounded-br-[10px] '>
                {JobSeekersMenu.map((item, index)=>{
                    return <a className='mb-[15px] font-bold cursor-pointer' key={index}>{item}</a>
                })}
            </div>}
            </div>
            <div className='relative'>
            <li className='flex items-center cursor-pointer' onClick={()=>{setShowJobSeekerMenu(false); setShowAboutMenu(!showAboutMenu)}}>About <motion.span  initial={{rotate:"0deg"}} animate={{rotate:`${showAboutMenu?"180deg":"0deg"}`}} transition={{ease:"easeInOut"}}><IoIosArrowDown className='mx-[5px]'  /></motion.span></li>
           {showAboutMenu &&  <div className='absolute flex flex-col z-10 bg-[#00283c] top-[100%] left-[-20%] w-[200px] p-[20px] rounded-bl-[10px] rounded-br-[10px] '>
                {AboutMenu.map((item, index)=>{
                    return <a className='mb-[15px] font-bold cursor-pointer' key={index}>{item}</a>
                })}
            </div>}
            </div>
            <a><li className='flex items-center cursor-pointer'>Contact</li></a>
        </ul>
        <div className="hidden nav-ul:block buttons  w-[fit-content] font-bold">
            <button className='mr-[10px]  p-[20px] w-[150px] rounded-[30px]'>Find a Job</button>
            <button className='mr-[10px] p-[20px] py-3 w-[150px] bg-[#ffd602] text-black rounded-[30px]'>Hire Talent</button>
        </div>
        <RiMenu3Line onClick={()=>{setShowMenu(!showMenu)}} className='block nav-ul:hidden cursor-pointer text-xl'  />
        {
            showMenu && <div className='absolute top-[100%] left-0 right-0 flex nav-ul:hidden bg-[#00283c] z-10 p-[15px]'>
            <ul className='w-full'>
                <li className='flex items-center w-full justify-between mb-[20px] font-bold'>Home</li>
                <div>
                <li onClick={()=>{setShowJobSeekerMenu(!showJobSeekerMenu); setShowAboutMenu(false)}} className='flex items-center w-full justify-between mb-[20px] font-bold'>Job Seekers <motion.span  initial={{rotate:"0deg"}} animate={{rotate:`${showJobSeekerMenu?"180deg":"0deg"}`}} transition={{ease:"easeInOut"}}><IoIosArrowDown className='mx-[5px]'  /></motion.span></li>
                {showJobSeekerMenu && <div className='flex flex-col'>
                    {JobSeekersMenu.map((item, index)=>{
                        return <a className='mb-[15px]' key={index}>{item}</a>
                    })}
                </div>}
                </div>
                <div>
                <li onClick={()=>{setShowJobSeekerMenu(false); setShowAboutMenu(!showAboutMenu)}} className='flex items-center w-full justify-between mb-[20px] font-bold'>About <motion.span  initial={{rotate:"0deg"}} animate={{rotate:`${showAboutMenu?"180deg":"0deg"}`}} transition={{ease:"easeInOut"}}><IoIosArrowDown className='mx-[5px]'  /></motion.span></li>
                {showAboutMenu && <div className='flex flex-col'>
                    {AboutMenu.map((item, index)=>{
                        return <a className='mb-[15px]' key={index}>{item}</a>
                    })}
                </div>}
                </div>
                <li className='flex items-center w-full justify-between mb-[20px] font-bold'>Contact</li>
            </ul>
        </div>
        }
    </nav>
  )
}

export default Nav
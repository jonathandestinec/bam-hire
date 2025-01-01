"use client"
import ServicesCard from '@/components/services-card'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
const page = () => {
  return (
    <div>

      {/* HEader Section */}

      <header className="w-full px-4 sm:px-8 lg:px-20 py-14 pb-32 flex flex-col items-center justify-center text-white mt-10 relative md:mt-0">
        <div className="relative w-full max-w-6xl mx-auto">

          <Image
            src="/assets/hero.svg"
            alt="Hero img"
            width={1000}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 filter blur-md"
          />

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
          className="relative z-10 text-center">
            <p className="text-lg sm:text-xl font-extrabold m-0 p-0 bold bg-gradient-to-r from-white to-yellow-100 text-transparent bg-clip-text">
              BAM HIRE
            </p>

            <p className="text-base sm:text-lg font-extrabold m-0 p-0 mt-3 sm:mt-5">
              Recruitment | Consulting
            </p>

            <h1 className="bold font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight m-0 p-0 mt-4 sm:mt-6">
              Your Talent. Our Focus.
            </h1>

            <div className="mt-8 sm:mt-10 w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <button className="shadow-[inset_0_0_0_2px_white] bg-white text-black px-12 w-max sm:px-8 md:w-max py-3 sm:py-4 rounded-full tracking-widest uppercase text-xs sm:text-sm font-bold transition duration-200 hover:bg-transparent hover:text-white">
                Launch Your Career
              </button>

              <button className="w-max shadow-[inset_0_0_0_2px_white] text-white px-12 sm:px-8 sm:w-max py-3 sm:py-4 rounded-full tracking-widest uppercase text-xs sm:text-sm font-bold bg-transparent transition duration-200 hover:bg-white hover:text-black">
                Build Your Team
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}

      <section className="w-full px-4 sm:px-8 lg:px-20 py-14 pb-0 text-black mt-10 relative bg-white services-section overflow-hidden">
        <div className="w-full relative max-w-7xl mx-auto pb-32 lg:pb-64">
          <motion.p
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
            }} className="text-center text-sm font-bold mb-5">
            OUR SERVICES
          </motion.p>

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
            }} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">
            Our Expertise
          </motion.h1>

          <motion.p
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
            }} className="text-center text-base sm:text-lg font-light mt-5 w-full sm:w-3/4 lg:w-1/2 mx-auto px-4">
            We offer a full range of Recruitment Services, Consulting, and Talent Development to help you find the right talent for your organization.
          </motion.p>

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
            }} className="w-full flex justify-center mt-8 sm:mt-16">
            <button className="shadow-[inset_0_0_0_2px_black] text-black px-6 sm:px-10 py-3 rounded-full tracking-widest uppercase text-sm sm:text-base font-bold bg-transparent transition duration-200 hover:bg-black hover:text-white">
              See What We Offer
            </button>
          </motion.div>

          <div className="relative mt-12 sm:mt-16">
           <motion.span
           initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
           >
            <Image
              src="/assets/guy1.png"
              alt="Services img"
              width={500}
              height={500}
              className="hidden sm:block w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto mx-auto"
            /></motion.span>

            <Image
              src="/assets/doodle-1.svg"
              alt="Services decoration"
              width={500}
              height={500}
              className="hidden sm:block absolute h-60 w-60 lg:h-80 lg:w-80 left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 lg:translate-x-0 filter blur-[3px]"
            />

            <Image
              src="/assets/doodle-2.svg"
              alt="Services decoration"
              width={500}
              height={500}
              className="hidden sm:block absolute h-60 w-60 lg:h-80 lg:w-80 right-0 top-0 transform translate-x-1/4 lg:translate-x-0 -translate-y-1/4"
            />
          </div>

          <ServicesCard />
        </div>
      </section>

    </div>
  )
}

export default page

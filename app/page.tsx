import React from 'react'

const page = () => {
  return (
    <div>

      {/* HEader Section */}

      <header className=' w-full h-screen px-20 pt-16 flex items-center justify-center text-white'>

        <div>
        <p className=' text-center text-xl font-extrabold leading-3 m-0 p-0 bold text-black'>BAM HIRE</p>

          <p className=' text-center text-xl font-extrabold m-0 p-0 mt-3'>Recruitment | Consulting</p>

          <p className=' bold text-center font-extrabold text-[60px] leading-none m-0 p-0 mt-5'>
            Your Talent. Our Focus.
          </p>

          <div className=' mt-8 w-full flex items-center justify-center gap-12 text-[12px]'>
            <button className="shadow-[inset_0_0_0_2px_white] bg-white text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[white] hover:text-black transition duration-200">
              Luanch Your Career
            </button>

            <button className="shadow-[inset_0_0_0_2px_white] text-white px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent transition duration-200">
              Build Your Team
            </button>
          </div>

        </div>

      </header>

    </div>
  )
}

export default page

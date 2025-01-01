import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div className=' w-[100px] flex items-center justify-between gap-10'>

            <Image
                src={"/assets/logo.avif"}
                alt="logo"
                width={100}
                height={100}
                className=' flex items-center justify-center h-max'
            />

            <Image
                src={"/assets/logo2.avif"}
                alt="logo"
                width={50}
                height={50}
                className=' flex items-center justify-center h-max'
            />

        </div>
    )
}

export default Logo

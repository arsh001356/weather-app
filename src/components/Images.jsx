import React from 'react'

function Images({ image }) {
    return (
        <div className=' flex flex-col justify-center items-center w-full'>
            <img src={`/${image}.png`} alt="/mist.png" className='lg:h-[100px] h-[500px] ' />
            <p className='capitalize text-white font-semibold lg:text-lg text-[3rem]'>{image}</p>
        </div>
    )
}

export default Images
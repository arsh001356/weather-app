import React from 'react'

function Temperature({ cityTemp }) {
    return (
        <div className=' flex justify-center items-center w-full lg:mt-4 mt-0 lg:mb-1 '>
            <p className='lg:text-4xl font-semibold text-white text-[8rem]'>{cityTemp}&deg;c</p>
        </div>
    )
}

export default Temperature
import React from 'react'

function City({ NewCityName, countryCode }) {
    return (
        <div className=' flex justify-center items-center w-full '>
            <p className='lg:text-2xl  text-white text-[5rem] capitalize'>{NewCityName}, {countryCode}</p>
        </div>
    )
}

export default City
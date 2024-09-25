import React from 'react'

function HumidityAndWindSpeed({ humidity, windSpeed }) {
    return (
        <div className=' flex  items-center w-full  h-fit lg:mt-6 mt-16 justify-around'>
            <div className='flex lg:gap-x-2 gap-x-8 '>
                <img src="/humidity.png" alt="" className='lg:h-[20px] h-[70px]' />
                <div>
                    <p className='text-white lg:text-[1rem] text-[3rem]'>{humidity}%</p>
                    <p className='text-white lg:text-[10px] text-[2rem] '>Humidity</p>
                </div>
            </div>
            <div className='flex  lg:gap-x-2 gap-x-8 '>
                <img src="/wind.png" alt="" className='lg:h-[20px] h-[70px]' />
                <div>
                    <p className='text-white lg:text-[1rem] text-[3rem]'>{windSpeed} km/h</p>
                    <p className='text-white lg:text-[10px] text-[2rem]'>Wind Speed</p>
                </div>
            </div>
        </div>
    )
}

export default HumidityAndWindSpeed
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

function SearchBar({ handleOnClickSearch, inpValue }) {
    return (
        <div className='w-full flex justify-evenly items-center  lg:my-5 my-14 '>
            <input type="text" className='lg:py-1 lg:p-5 p-10 lg:h-8 h-20 lg:w-52 w-[35rem] rounded-full border-none lg:text-sm text-4xl capitalize' placeholder='Enter City Here' ref={inpValue} />
            <button className='bg-white  lg:p-2 p-6 rounded-full ' onClick={handleOnClickSearch} ><IoSearchSharp className='lg:size-4 size-10' /></button>
        </div>
    )
}

export default SearchBar
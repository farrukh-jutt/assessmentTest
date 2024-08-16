import React from 'react'

export const SearchBar = ({inputHandler,btnHandler,searchedInput}) => {
  return (
    <div className='w-[100%] flex justify-center'>
    <div className='flex flex-col w-[50%] justify-start gap-[8px]'>
      <div className='w-[100%]'>
        <input 
        onChange={inputHandler}
        placeholder='Enter the city name...'
        name="input"
        className='bg-stone-300 outline-none w-full rounded-md p-[5px] '
        >
        
        </input>
      </div>
  
  <div className='w-full'>
  <button
  onClick={()=>btnHandler(searchedInput)}
  className='p-[5px] border border-green-300 text-green-300 rounded-md flex justify-center items-center w-[100px]'
  >
Search
  </button>

  </div>
    </div>
    </div>
  )
}

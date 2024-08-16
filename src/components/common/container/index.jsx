import React, { Children } from 'react'

export const Container = ({children}) => {
  return (
    <div className='p-[20px]'>
        {children}
    </div>
  )
}

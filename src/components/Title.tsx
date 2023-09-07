import React from 'react'

type Props = {
    title:string
}

function Title({title}: Props) {
  return (
    <h2 className='text-[#4B4B4B] font-bold  font-Poppins text-[1.3rem]'>{title}</h2>
  )
}

export default Title
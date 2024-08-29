import React from 'react'

const Input = ({title="put input title",onClick,type="text"}) => {
  return (
    <input className='w-full border-2 border-orange-500 p-2 rounded-md text-black' onClick={onClick} type={type} placeholder={title} />
  )
}

export default Input
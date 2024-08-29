import React from 'react'

const Button = ({onClick,title}) => {
  return (
    <button className='bg-orange-500/80 p-2 min-w-[150px] rounded-md font-semibold uppercase' onClick={onClick}>
        {title}
    </button>
  )
}

export default Button;
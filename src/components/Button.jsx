/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Button = ({onClick,title,link}) => {
  console.log('hello')
  return (
    <Link className='bg-orange-500/80 hover:opacity-90 p-2 min-w-[150px] rounded-md font-semibold uppercase' onClick={onClick} to={link||null} target="_blank"> 
        {title}
    </Link>
  )
}

export default Button;
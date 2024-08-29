import React, { useEffect, useState } from 'react'
import { FaXTwitter } from 'react-icons/fa6';
import { Outlet, Link, useNavigate, useNavigation, useRoutes, useLocation, NavLink } from "react-router-dom";
import { LuMenu } from 'react-icons/lu'

const NavBar = () => {

    const navList = [
        {
            "name": "home",
            "url": "/"
        },
        {
            "name": "projects",
            "url": "/projects"
        },
        {
            "name": "about",
            "url": "/about"
        },
        {
            "name": "contact",
            "url": "/contact"
        },
        // {
        //     "name": "resume",
        //     "url": "/resume"
        // }
    ]


    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        console.log('pressed')
        return setOpenMenu(!openMenu)
    }

    return (
        <div className='w-full min-h-fit relative bg-black'>
            {/**navigation menu for mobile */}
            {openMenu && <ul className="absolute flex bg-inherit  flex-col lg:hidden   text-2xl text-gray-300 w-full h-full items-end z-50 ">
                <div className="flex w-full items-start  mb-4 p-4">
                    <FaXTwitter color='white' size={18} onClick={handleMenu} />
                </div>
                <ul className='flex flex-col gap-8 w-full start items-end   px-4'>
                {navList.map((nav) => 
                <NavLink 
                key={nav.name}
                to={nav.url} 
                onClick={()=>setOpenMenu(!openMenu)}
                className={({isActive})=>{
                  return(
                     ' p-1 w-full text-right capitalize py-2 px-4 rounded' +
                     (isActive&&' bg-orange-500') 
                  )
                }}>
                 {nav.name}

                  </NavLink>
                )}
                </ul>

            </ul>}
            
            <nav className="relative flex justify-between items-center font-semibold py-6 w-full  px-4">
                <div className="logo text-2xl md:text-4xl text-white"><Link to={'/'}>Solomon</Link></div>
                {/**mobile menu buttom*/}
                <button className="block lg:hidden" onClick={handleMenu}>
                    <LuMenu color='white' size={24} />
                </button>

                {/**navigation menu for tablet and desktop */}
                <ul className="menu hidden lg:flex gap-8 text-xl text-gray-300 bg-slate-600/40 rounded">
                    {navList.map((nav) => 
                  <NavLink 
                  key={nav.name}
                  to={nav.url} 
                  className={({isActive})=>{
                    return(
                       ' p-1 w-full text-right capitalize py-2 px-4 rounded' +
                       (isActive&&' bg-orange-500') 
                    )
                  }}>
                   {nav.name}

                    </NavLink>)}
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}

export default NavBar
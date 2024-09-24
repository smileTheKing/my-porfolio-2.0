import { useEffect, useState } from 'react'
import { Outlet, } from "react-router-dom";
import { LuMenu } from 'react-icons/lu'
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import { logo } from '../assets/assetFiles';

FaXTwitter
const NavBar = () => {

    const navList = [
        {
            "name": "home",
            "url": "/"
        },
        {
            "name": "projects",
            "url": "project"
        },
        {
            "name": "about",
            "url": "about"
        },
        {
            "name": "contact",
            "url": "contact"
        },
    ]

    const [isActive, setIsActive] = useState('/')
    const [openMenu, setOpenMenu] = useState(false);

    const storeIsActive = localStorage.getItem("isActive")
    const handleMenu = () => setOpenMenu(!openMenu);


    useEffect(() => {
        setIsActive(storeIsActive);
    }, [isActive, storeIsActive])
    const handleIsActive = (e) => {
        setIsActive(e)
        localStorage.setItem("isActive", e)
    }


    return (



        <div className='w-full transition-all duration-1000 min-h-fit relative bg-black'>
            {/**navigation menu for mobile */}
            {openMenu &&
                <motion.ul
                    initial={{ x: 100 }}
                    animate={{
                        x: 0,
                        transition: {
                            duration: 0.2
                        },

                    }}

                    className="absolute flex bg-inherit  flex-col lg:hidden  bg-black  text-2xl text-gray-300 w-full h-full items-end z-50">
                    {/* <div className=" hidden flex w-full items-start  m-4 p-4">
                    <FaXTwitter color='white' size={18} onClick={handleMenu} />
                </div> */}
                    <ul className='flex flex-col gap-8 w-full start items-end   p-4'>
                        {navList.map((nav) =>
                            <a
                                key={nav.name}
                                href={`#${nav.url}`}
                                onClick={() => {
                                    handleIsActive(nav.url) 
                                    setOpenMenu(!openMenu) }}
                                className={
                                        ' p-1 w-full text-right capitalize py-2 px-4 rounded' +
                                        (isActive === nav.url && ' bg-orange-500')                                  
                                }>
                                {nav.name}
                            </a>
                        )}
                    </ul>
                </motion.ul>}



            <nav className="relative flex justify-between items-center font-semibold py-6 px-2 md:px-0 w-full">
                <div className="logo text-2xl md:text-4xl text-white w-[24px] md:w-[34px]"><a href={'/'} onClick={() => handleIsActive('/')}><img src={logo} width={'100%'} height={'100%'}/></a></div>
                {/**mobile menu buttom*/}
                <button className="block lg:hidden" onClick={handleMenu}>
                    <LuMenu color='white' size={24} />
                </button>
                {/**navigation menu for tablet and desktop */}
                <ul className="menu hidden lg:flex gap-8 text-xl text-gray-300 bg-slate-600/40 rounded">
                    {navList.map((nav) =>

                        <a
                            key={nav.name}
                            href={`#${nav.url}`}

                            onClick={() => handleIsActive(nav.url)}
                            className={
                                ' p-1 w-full text-right capitalize py-2 px-4 rounded' +
                                (isActive === nav.url && ' bg-orange-500')

                            }>
                            {nav.name}
                        </a>)}
                </ul>
            </nav>
            <Outlet />
        </div>


    )
}

export default NavBar
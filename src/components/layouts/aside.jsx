import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiHome4Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { LuLogIn } from 'react-icons/lu';

const Aside = ({ isOpen }) => {
  const [toggle, setToggle ] = useState(false);
    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token){
        setToggle(true)
      }
    },[]);

    const handleLogout = () => {
      localStorage.removeItem('token')
      window.location.reload()
    }
  return (
    <aside className={`p-2 transition-all duration-300 ${isOpen ? 'w-[280px]' : 'w-[90px]'}`}>
      <div className='w-full h-full bg-white dark:bg-[#18181b] rounded-lg border-[3px] border-gray-200 dark:border-gray-800'>
      <div className="p-4">
        <nav >
          <ul className="flex flex-col gap-2">
          <p className={`text-gray-600 dark:text-gray-400 mb-2 text-base font-semibold ${!isOpen && 'hidden'}`}>Sahifalar</p>
            <li>
              <NavLink to="/" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <RiHome4Line size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Bosh sahifa</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <IoBookOutline size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Kurslar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <CgNotes size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Loyihalar</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <MdOutlineDashboard size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Dashboard</span>
              </NavLink>
            </li>
          </ul>
          {!toggle?(
              <Link  to="/login" className="flex absolute bottom-10 left-4 items-center gap-2 dark:bg-gray-800 bg-gray-200 px-20 py-2 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-400 transition-all duration-300 dark:text-white text-black text-base font-semibold mt-auto">
              <span>Kirish</span>
              <LuLogIn size={22} />
            </Link>
            ):(
              <button onClick={() => handleLogout()} className="flex absolute bottom-10 left-4  mt-auto items-center gap-2 dark:bg-gray-800 bg-gray-200 px-20 py-2 rounded-lg dark:hover:bg-red-400 hover:bg-red-400 transition-all duration-300 dark:text-white text-black text-base font-semibold">
              <span>Chiqish</span>
              <LuLogIn size={22} />
            </button>
            )
          }
        </nav>
      </div>
      </div>
    </aside>
  )
}

export default Aside
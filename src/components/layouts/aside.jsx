import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiHome4Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCodeSlashOutline } from "react-icons/io5";

const Aside = ({ isOpen }) => {
  return (
    <aside className={`p-2 transition-all duration-300 ${isOpen ? 'w-[280px]' : 'w-[90px]'}`}>
      <div className='w-full h-full bg-white dark:bg-[#18181b] rounded-lg border-[3px] border-gray-200 dark:border-gray-800'>
      <div className="p-4">
        <nav>
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
        </nav>

        <nav className="mt-8">
          <p className={`text-gray-600 dark:text-gray-400 mb-2 text-base font-semibold ${!isOpen && 'hidden'}`}>Loyihalar</p>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/blogs" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <FaBlogger size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <CgProfile size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Resume builder</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/code" className={({isActive}) => `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${isActive ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <IoCodeSlashOutline size={24} />
                <span className={`${!isOpen && 'hidden'}`}>Beautiful code</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </aside>
  )
}

export default Aside
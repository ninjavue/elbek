import React from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar, toggleTheme }) => {
  return (
      <header className=" sticky top-0 left-0 right-0 bg-white dark:bg-[#18181b] z-30 px-4 m-2 rounded-lg py-6 border-[3px] dark:border-gray-800 border-gray-200">
        <div className="flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src="https://www.sammi.ac/logo.svg" alt="logo" className="w-10 h-10" />
          <span className={`dark:text-white text-3xl font-semibold text-black`}>Edu.uz</span>
        </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-900 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <BsLayoutSidebar size={20} />
            </button>
            <button
              onClick={toggleTheme}
              className="dark:text-gray-400 text-gray-800 dark:hover:text-white hover:text-gray-900 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <IoSunnyOutline size={24} />
            </button>
            <Link to="/auth" className="flex items-center gap-2 dark:bg-gray-800 bg-gray-200 px-4 py-2 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-400 transition-all duration-300 dark:text-white text-black text-base font-semibold">
              <span>Kirish</span>
              <LuLogIn size={22} />
            </Link>
          </div>
        </div>
      </header>
  );
};

export default Header;

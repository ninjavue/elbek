import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiHome4Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdOutlineDashboard } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayment } from "react-icons/md";

const Aside = ({ isOpen }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToggle(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <aside
      className={`p-2 transition-all duration-300 ${
        isOpen ? "w-[280px]" : "w-[90px]"
      }`}
    >
      <div className="w-full h-full bg-white dark:bg-[#18181b] rounded-lg border-[3px] border-gray-200 dark:border-gray-800">
        <div className="p-4">
          <nav>
            <ul className="flex flex-col gap-2 h-[90vh]">
              <p
                className={`text-gray-600 dark:text-gray-400 mb-2 text-base font-semibold ${
                  !isOpen && "hidden"
                }`}
              >
                Sahifalar
              </p>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <RiHome4Line size={24} />
                  <span className={`${!isOpen && "hidden"}`}>Bosh sahifa</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <IoBookOutline size={24} />
                  <span className={`${!isOpen && "hidden"}`}>Kurslar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <CgNotes size={24} />
                  <span className={`${!isOpen && "hidden"}`}>Loyihalar</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <MdOutlineDashboard size={24} />
                  <span className={`${!isOpen && "hidden"}`}>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <CgProfile size={24} />
                  <span className={`${!isOpen && "hidden"}`}>Shaxsiy kabinet</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/payment"
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold ${
                      isActive
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }`
                  }
                >
                  <MdOutlinePayment size={24} />
                  <span className={`${!isOpen && "hidden"}`}>To'lov</span>
                </NavLink>
              </li>
              <li className="mt-auto">
                {!toggle ? (
                  <Link
                    to="/login"
                    className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white w-full`}
                  >
                    <LuLogIn size={22} />
                    <span className={`${!isOpen && "hidden"}`}>Kirish</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => handleLogout()}
                    className={`flex items-center gap-2 text-gray-600 dark:text-gray-400 p-2 rounded-lg text-lg font-semibold "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white w-full`}
                  >
                    <FiLogOut size={22} />
                    <span className={`${!isOpen && "hidden"}`}>Chiqish</span>
                  </button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

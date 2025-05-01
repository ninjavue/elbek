import React from 'react';
import { LuClock3 } from "react-icons/lu";
import { FaRocket } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Kurslar */}
      <div className="bg-[#349eff] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
        <div className="flex flex-col gap-4">
          <LuClock3 size={50} className="text-white" />
          <h2 className="text-2xl font-bold">Kurslar</h2>
          <p className="text-white text-lg">
            Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan kurslar.
            Sohadagi o'zingizda mavjud bo'shliqni to'ldiring.
          </p>
        </div>
        <Link to='/courses' className="mt-6 w-full flex justify-center items-center border border-white rounded-md px-4 py-2 hover:bg-white text-xl hover:text-[#349eff] transition">
          <span>31 ta kurs</span>
          <FiArrowRight size={20} />
        </Link>
      </div>

      {/* Loyihalar */}
      <div className="bg-[#0a0f1b] text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
        <div className="flex flex-col gap-4">
          <FaRocket size={50} className="text-white" />
          <h2 className="text-2xl font-bold">Loyihalar</h2>
          <p className="text-white text-lg">
            Loyihalar yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga tayyor bo'lib chiqing.
          </p>
        </div>
        <Link to='/projects' className="mt-6 w-full flex justify-center items-center border border-white rounded-md px-4 py-2 hover:bg-white hover:text-[#0a0f1b] transition text-xl">
          <span>16 ta loyiha</span>
          <FiArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

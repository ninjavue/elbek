import React, { useEffect, useState } from 'react';
import { BsPeople } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsFilePersonFill } from "react-icons/bs";
import { FaStar } from 'react-icons/fa';
import foundation from '../../assets/images/foundation.webp';
import javascript from '../../assets/images/js.webp';
import typescript from '../../assets/images/ts.webp';
import { Link, useParams } from 'react-router-dom';

const Course = () => {
  const { id } = useParams();
  const [courseKey, setCourseKey] = useState("foundation");
  const [courseInfo, setCourseInfo] = useState({});
  const [courseName, setCourseName ] = useState(null)
  const courseData = {
    foundation: {
      title: "Foundation",
      description: "Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM), Bootstrap, SASS (SCSS) va amaliy loyihlar barchasi bitta kurs va asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni yasashingiz mumkin va uni hosting joylashni ham sizga batafsil ma'lumot beramiz.",
      image: foundation,
      students: "649",
      date: "2025, 11-Mart",
      lessons: "47",
      duration: "12 soat 55 daqiqa",
      rating: "5",
      reviews: "39",
      price: "250,000 UZS",
      topics: ['HTML', 'CSS', 'JavaScript', 'BEM', 'SASS', 'SCSS', 'Bootstrap', 'Web-Sayt', 'Portfolio']
    },
    javascript: {
      title: "JavaScript",
      description: "Eng mashhur dasturlash tillaridan biri xisoblangan Javascript haqida to'liq kurs. Ushbu kursda siz JavaScriptni to'liq amaliyot yordamida o'rganishingiz mumkin, xar bir nazariy bilimlarni amaliyotda qo'llab. Telegram bot yordamida integratsiya qilib, loyihalar quramiz. Webpack yordamida loyihani modullarga bo'lish, json-server bilan ishlash, server bilan ishlash va yana juda ham ko'p kerakli bo'lgan texnologiyalar va ma'lumotlar.",
      image: javascript,
      students: "736",
      date: "2025, 11-Mart",
      lessons: "43",
      duration: "15 soat 37 daqiqa",
      rating: "5",
      reviews: "60",
      price: "250,000 UZS",
      topics: ['JavaScript Asoslari', 'DOM', 'Events', 'Async/Await', 'Promises', 'Modules', 'Webpack', 'JSON Server', 'REST API', 'Telegram Bot', 'LocalStorage', 'ES6+']
    },
    typescript: {
      title: "TypeScript",
      description: "Ushbu kurs JavaScript asoslarini biladiganlar uchun mo'ljallangan bo'lib, sizni TypeScript tilining imkoniyatlari bilan chuqur tanishtiradi. Asosiy va murakkab tiplar, interfeyslar, klasslar, generic'lar, conditional va mapped type'lar, dekoratorlar hamda modullilikni o'rganasiz. Har bir modulda nazariy bilimlar va live-coding orqali amaliy mashg'ulotlar mavjud. Yakunda siz kengaytiriladigan CLI-utility loyihasini ishlab chiqasiz va dizayn patternlari yordamida kuchli arxitekturani qurishni o'rganasiz. Frontend va backend sohalarida TypeScript'ni jiddiy o'rganmoqchi bo'lganlar uchun ideal tanlov!",
      image: typescript,
      students: "407",
      date: "2025, 4-Aprel",
      lessons: "74",
      duration: "16 soat 39 daqiqa",
      rating: "5",
      reviews: "37",
      price: "250,000 UZS",
      topics: ['TypeScript Asoslari', 'Type Annotations', 'Interfaces', 'Classes', 'Generics', 'Enums', 'Advanced Types', 'Decorators', 'Modules', 'Design Patterns', 'CLI Development', 'Type Guards']
    }
  };

  
  useEffect(() => {
    fetchCourseById();
  }, []);

  const fetchCourseById = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/lesson-names");
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();

      const found = data.find(item => item.id == id);
      setCourseInfo(found);
      setCourseName(found.lesson_name);
      if (found) {
        const lesson = found.lesson_name.toLowerCase();
        if(lesson == 'foundation' || lesson == 'javascript' || lesson == 'typescript'){
          setCourseKey(lesson);
        }
      } else {
        setCourseKey("foundation");
      }
    } catch (err) {
      console.error("Xatolik:", err);
      setCourseKey("foundation");
    }
  };

  const course = courseData[courseKey];

  return (
    <div className="min-h-screen p-6">
      <div className='mb-7 dark:bg-[#18181b] bg-white rounded-lg p-6 border-[3px] dark:border-gray-700'>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold dark:text-white text-black mb-4">{courseInfo.lesson_name}</h1>
            <p className="dark:text-gray-400 text-gray-600 mb-6 text-base">
              {courseInfo.lesson_description}
            </p>
            
            <div className="flex flex-wrap gap-4 dark:text-gray-400 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span>Muallif:</span>
                <span className='text-white'>{courseInfo.lesson_author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsPeople className="text-xl" />
                <span>{course.students} o'quvchilar</span>
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCalendar className="text-xl" />
                <span>{course.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiTime className="text-xl" />
                <span>{course.lessons} darslar soni</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-8">
              <span className="dark:text-gray-400 text-gray-600">Davomiyligi:</span>
              <span className="dark:text-white text-gray-800">{course.duration}</span>
              <div className="flex items-center gap-1 ml-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                <span className="text-gray-400">({course.reviews})</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg mt-10">
              <img src={courseInfo.lesson_banner} alt={courseInfo.lesson_name} className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      {/* ///// */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Nima o'rganasiz section */}
            <div className="dark:bg-[#18181b] bg-white rounded-lg p-6 border-[3px] dark:border-gray-700">
              <h2 className="text-xl font-semibold dark:text-white text-black mb-4">Nimalarni o'rganasiz</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.topics.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1">
            <div className="dark:bg-[#18181b] bg-white rounded-lg p-6 border-[3px] dark:border-gray-700">
              <h2 className="text-xl font-semibold dark:text-white text-black mb-4">Kurs narxi</h2>
              <div className="mb-4">
                <p className="text-2xl font-bold dark:text-white text-black">Bepul</p>
                <p className="dark:text-gray-400 text-gray-600 line-through">{course.price}</p>
              </div>
              <Link to={`/course/${id}/lesson`} className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Kursni ko'rish →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
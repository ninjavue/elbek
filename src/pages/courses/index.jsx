import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import foundation from "../../assets/images/foundation.webp";
import javascript from "../../assets/images/js.webp";
import typescript from "../../assets/images/ts.webp";

const courses = [
  {
    id: 1,
    title: "Foundation",
    description: "HTML, CSS va JavaScript asoslari",
    image: foundation,
    path: "/courses/foundation",
  },
  {
    id: 2,
    title: "JavaScript",
    description: "JavaScript dasturlash tili",
    image: javascript,
    path: "/courses/javascript",
  },
  {
    id: 3,
    title: "TypeScript",
    description: "TypeScript dasturlash tili",
    image: typescript,
    path: "/courses/typescript",
  },
];

const Courses = () => {
  const [categories, setCategories] = useState([]);
  const [allcourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCategory, setIsCategory] = useState('all')

  useEffect(() => {
    fetchCategories();
    fetchAllCourses();
  }, []);

  const fetchCategories = async () => {
    fetch("http://127.0.0.1:8000/api/v1/categories")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error" + res.status);
        }
        return res.json();
      })
      .then((data) => {
        let newData = []
        data.forEach(category => {
          if(category?.category_name === 'Project'){
            return
          }
          newData.push(category)
        });
        setCategories(newData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  };
  const fetchAllCourses = async () => {
    fetch("http://127.0.0.1:8000/api/v1/lesson-names")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error" + res.status);
        }
        return res.json();
      })
      .then((data) => {
        let newData = []
        data.forEach(course => {
          if(course?.lesson_category?.category_name === 'Project'){
            return
          }
          newData.push(course)
        });
        setAllCourses(newData);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  };

  const filteredCourses = isCategory === 'all'
  ? allcourses
  : allcourses.filter(course => course.lesson_category.id === isCategory);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Kurslar
        </h1>
        <div className="flex gap-2 flex-wrap mb-8">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <button className={`font-semibold px-4 py-2 rounded-md ${isCategory == 'all'? 'bg-blue-500 text-white ':'border border-blue-500 bg-blue-500/20 text-blue-700'}`} onClick={() => setIsCategory('all')}>
                Barcha kurslar
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`font-semibold px-4 py-2 rounded-md  ${isCategory == category.id? 'bg-blue-500 text-white ':'border border-blue-500 bg-blue-500/20 text-blue-700'}`}
                  onClick={() => setIsCategory(category.id)}
                >
                  {category.category_name}
                </button>
              ))}
            </>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="dark:bg-[#18191A] bg-white border-[3px] dark:border-gray-700 border-gray-300 rounded overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={course.lesson_banner}
                alt={course.lesson_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold dark:text-white text-black">
                  {course.lesson_name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

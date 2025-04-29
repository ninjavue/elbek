import React from 'react'
import { Link } from 'react-router-dom'
import foundation from '../../assets/images/foundation.webp'
import javascript from '../../assets/images/js.webp'
import typescript from '../../assets/images/ts.webp'

const courses = [
  {
    id: 1,
    title: 'Foundation',
    description: 'HTML, CSS va JavaScript asoslari',
    image: foundation,
    path: '/courses/foundation'
  },
  {
    id: 2,
    title: 'JavaScript',
    description: 'JavaScript dasturlash tili',
    image: javascript,
    path: '/courses/javascript'
  },
  {
    id: 3,
    title: 'TypeScript',
    description: 'TypeScript dasturlash tili',
    image: typescript,
    path: '/courses/typescript'
  }
]

const Home = () => {
  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Edu.uz - dasturlash kurslari</h1>
        <p className="text-lg opacity-90 mb-6">
          Bu sizga dasturlashni o'rganishda yordam beradigan platforma. 
          Pulli darslardagi ma'lumotlarni bepul olishingiz mumkin. 
          Barchasi bir joyda!
        </p>
        <Link 
          to="/courses" 
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
        >
          Barcha kurslar
        </Link>
      </section>

      {/* Courses grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-white">Mashhur kurslar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <Link 
              key={course.id} 
              to={course.path}
              className="dark:bg-[#18191A] bg-white border-[3px] dark:border-gray-700 border-gray-300 rounded overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold dark:text-white text-black">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
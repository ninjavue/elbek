import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tgc from '../../assets/images/tgc.webp'
import twc from '../../assets/images/twc.webp'
import gdc from '../../assets/images/gdc.webp'
import jrc from '../../assets/images/jrc.webp'

const projects = [
    {
      id: 1,
      title: 'Telegram Clone',
      image: tgc,
      path: '/projects/telegram-clone'
    },
    {
      id: 2,
      title: 'Twitter Clone',
      image: twc,
      path: '/projects/twitter-clone'
    },
    {
      id: 3,
      title: 'Google Drive Clone',
      image: gdc,
      path: '/projects/google-drive-clone'
    },
    {
      id: 4,
      title: 'Jira Clone',
      image: jrc,
      path: '/projects/jira-clone'
    }
  ]

const Projects = () => {
  const [allProjects, setAllProjects] = useState([]);  
  useEffect(() => {
    fetchAllProjects();
  }, []);
  
  const fetchAllProjects = async () => {
    fetch("http://127.0.0.1:8000/api/v1/lesson-names")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error" + res.status);
        }
        return res.json();
      })
      .then((data) => {
        let newData = []
        data.forEach(project => {
          if(project?.lesson_category?.category_name === 'Project'){
            newData.push(project)
          }
        });
        setAllProjects(newData);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Loyihalar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map(project => (
            <Link 
              key={project.id} 
              to={`/course/${project.id}`}
              className=" dark:bg-[#18191A] bg-white border-[3px] dark:border-gray-700 border-gray-300 rounded overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={project.lesson_banner} 
                alt={project.lesson_name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold dark:text-white text-black">{project.lesson_name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
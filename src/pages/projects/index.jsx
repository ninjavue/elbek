import React from 'react';
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
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Loyihalar</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
            <Link 
              key={project.id} 
              to={project.path}
              className=" dark:bg-[#18191A] bg-white border-[3px] dark:border-gray-700 border-gray-300 rounded overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <h3 className="text-xl font-semibold dark:text-white text-black">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
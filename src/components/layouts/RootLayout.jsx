import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Aside, Header } from './'

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(true)

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme === 'dark'
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(prev => !prev)
  }

  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="flex min-h-screen dark:bg-black bg-gray-100">
      <Aside isOpen={isOpen} />
      <main className={`main-container transition-all duration-300`}>
        <Header toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
        <div className='p-4 main-content'>
            <Outlet />
        </div>
      </main>
    </div>
  )
}

export default RootLayout 
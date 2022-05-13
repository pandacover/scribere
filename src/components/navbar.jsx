import React, { useState } from 'react'

const Navbar = () => {
  const [toggleMode, setToggleMode] = useState(false);
  const toggleDarkMode = (e) => {
    e.preventDefault();
    setToggleMode(!toggleMode)
    document.querySelector('body').classList.toggle('dark')
  }
  return (
    <header className='flex justify-between items-center w-full h-16 px-24 bg-gradient-to-r from-[#0002] to-[#0001]'>
        <p className='lowercase text-lime-600 text-4xl font-medium font-serif dark:text-lime-400 flex items-center gap-2'>
    <span>Scrībere</span>
<svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.2132 9.07107C38.6117 10.4696 39.5641 12.2514 39.95 14.1912C40.3358 16.131 40.1378 18.1417 39.3809 19.969C38.6241 21.7962 37.3423 23.358 35.6978 24.4568C34.0533 25.5556 32.1199 26.1421 30.1421 26.1421C28.1643 26.1421 26.2309 25.5556 24.5864 24.4568C22.9419 23.358 21.6602 21.7962 20.9033 19.969C20.1465 18.1417 19.9484 16.131 20.3343 14.1912C20.7201 12.2514 21.6725 10.4696 23.0711 9.07107L30.1421 16.1421L37.2132 9.07107Z" fill="#86D20A"/>
<circle cx="30" cy="47" r="3" fill="#86D20A"/>
<circle cx="30" cy="30" r="28.5" stroke="#96EE06" stroke-width="3"/>
<rect x="28" y="24" width="4" height="17" rx="2" fill="#86D20A"/>
</svg>
    </p>
        <div className='flex-1 flex justify-end space-x-8 items-center'>
          <button className='w-6 h-3 rounded-xl bg-gray-300 dark:bg-gray-400 flex items-center relative block' onClick={(e) => toggleDarkMode(e)}>
            <div className={`toggle-btn w-5 h-5 bg-lime-500 rounded-full absolute dark:bg-lime-300 ${toggleMode ? 'toggled' : ''}`} />
          </button>
          <button className='text-lime-600 font-semibold dark:text-lime-400 hover:text-lime-500 dark:hover:text-lime-600 transition'>Logout</button>     
        </div>
    </header>
  )
}

export default Navbar

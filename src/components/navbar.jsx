import React, { useState } from 'react'

const Navbar = () => {
  const [toggleMode, setToggleMode] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setToggleMode(!toggleMode)
    document.querySelector('body').classList.toggle('dark')
  }

  const handleToggleMenu = (e) => {
    e.preventDefault()
    setToggleMenu(!toggleMenu)
  }

  return (
    <header className='flex justify-between items-center w-full h-16 px-6'>
      <p className='lowercase text-4xl font-medium font-serif flex items-center gap-2'>
        <span>Scrībere</span>
      </p>
      <div className='flex-1 flex justify-end gap-8 items-center'>
        <button className='w-5 h-3 rounded-xl bg-gray-300 dark:bg-gray-400 flex items-center relative' onClick={(e) => toggleDarkMode(e)}>
          <div className={`toggle-btn w-4 h-4 bg-gray-400 rounded-full absolute ${toggleMode ? 'toggled' : ''}`} />
        </button>
        <div className='select-none relative flex items-center p-2 group hover:bg-black transition cursor-pointer' onClick={e => handleToggleMenu(e)}>
          <div className='flex gap-2 items-center'>
            <img className='w-8 h-8 rounded-full' src='https://avatars.dicebear.com/api/male/john.svg?background=%230000ff' alt='user profile avatar' />
            <figure>
              <svg className='group-hover:translate-y-2 fill-black group-hover:fill-white transition' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9999 9.17019C16.8126 8.98394 16.5591 8.87939 16.2949 8.87939C16.0308 8.87939 15.7773 8.98394 15.5899 9.17019L11.9999 12.7102L8.45995 9.17019C8.27259 8.98394 8.01913 8.87939 7.75495 8.87939C7.49076 8.87939 7.23731 8.98394 7.04995 9.17019C6.95622 9.26315 6.88183 9.37375 6.83106 9.49561C6.78029 9.61747 6.75415 9.74818 6.75415 9.88019C6.75415 10.0122 6.78029 10.1429 6.83106 10.2648C6.88183 10.3866 6.95622 10.4972 7.04995 10.5902L11.2899 14.8302C11.3829 14.9239 11.4935 14.9983 11.6154 15.0491C11.7372 15.0998 11.8679 15.126 11.9999 15.126C12.132 15.126 12.2627 15.0998 12.3845 15.0491C12.5064 14.9983 12.617 14.9239 12.7099 14.8302L16.9999 10.5902C17.0937 10.4972 17.1681 10.3866 17.2188 10.2648C17.2696 10.1429 17.2957 10.0122 17.2957 9.88019C17.2957 9.74818 17.2696 9.61747 17.2188 9.49561C17.1681 9.37375 17.0937 9.26315 16.9999 9.17019Z" />
              </svg>
            </figure>
          </div>
          <div className={`transition absolute w-48 bg-zinc-900 scale-0 text-white -left-[104px] top-16 p-2 grid grid-flow-row ${toggleMenu ? 'scale-100' : ''}`}>
            <div className='flex items-center gap-4'>
              <figure className='w-8 h-8'>
                <img className='object-contain' src='https://avatars.dicebear.com/api/male/john.svg?background=%230000ff' alt='user profile avatar' />
              </figure>
              <span className='text-sm'>user@email.com</span>
            </div>
            <div className='py-2'>
              <button type='button'>Add account</button>
            </div>
            <div className='py-2'>
              <button type='button'>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

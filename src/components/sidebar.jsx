import React from 'react'

const Sidebar = () => {
    return (
        <aside className='flex flex-col items-start w-1/4 pl-4 gap-8 bg-slate-50'>
          <h4 className='text-red-400 pt-2'>Menu</h4>
          <div className='flex flex-col gap-4'>
            <button className='rounded-full p-2 bg-violet-500 text-white font-semibold hover:bg-violet-600 active:bg-violet-700 active:border-2 focus-outline:none focus:ring focus:ring-violet-300'>Sign up</button>
            <button className='rounded-full p-2 bg-violet-500 text-white font-semibold hover:bg-violet-600 active:bg-violet-700 active:border-2 focus-outline:none focus:ring focus:ring-violet-300'>Sign in</button>
            <button className='rounded-full p-2 bg-violet-500 text-white font-semibold hover:bg-violet-600 active:bg-violet-700 active:border-2 focus-outline:none focus:ring focus:ring-violet-300'>Add Note</button>
          </div>
        </aside>
    )
}

export default Sidebar

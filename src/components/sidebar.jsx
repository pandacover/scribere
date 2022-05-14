import React from 'react'

const Sidebar = () => {
    return (
        <div className='p-4 border dark:border-zinc-800 dark:text-white h-container-height -mt-[1px] flex-1 w-full'>
            <div className='flex items-center justify-center'>
                <button className='font-medium rounded-md border-2 border-black hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black px-4 py-2 transition-all duration-150' type='button'>Create Note</button>
            </div>
        </div>
    )
}

export default Sidebar

import { Navbar, Notes, Sidebar } from './components'
import { createContext, useState } from 'react'

export const MarkdownContext = createContext(null)

const App = () => {
  const [toggleNotesContainer, setToggleNotesContainer] = useState(false)
    return (
      <MarkdownContext.Provider value={{ toggleNotesContainer, setToggleNotesContainer }}>
        <div className='w-screen min-h-screen overflow-x-hidden relative'>
            <Navbar />
            <main className='w-full flex'>
                <Sidebar />
                <Notes />
            </main>
        </div>
      </MarkdownContext.Provider>
    )
}

export default App

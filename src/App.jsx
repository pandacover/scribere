import { Navbar, Notes, Sidebar } from './components'

const App = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden relative dark:bg-black'>
            <Navbar />
            <main className='w-full flex'>
                <Sidebar />
                <Notes />
            </main>
        </div>
    )
}

export default App

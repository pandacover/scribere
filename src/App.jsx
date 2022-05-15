import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Notes from "./components/notes"

const App = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden relative dark:bg-gradient-to-r from-gray-800 to-slate-900'>
          <Navbar />
          <div className="flex h-screen">
              <Sidebar />
              <Notes />
          </div>
      	</div>
    )
}

export default App

import { Navbar, Notes, Sidebar } from "./components";
import { createContext, useState } from "react";

export const MarkdownContext = createContext(null);

const App = () => {
  const [toggleNotesContainer, setToggleNotesContainer] = useState(false);
  return (
    <MarkdownContext.Provider
      value={{ toggleNotesContainer, setToggleNotesContainer }}
    >
      <div className="w-screen min-h-screen overflow-x-hidden relative">
        <Navbar />
        <main className="w-screen grid grid-cols-5">
          <Sidebar />
          <Notes />
        </main>
      </div>
    </MarkdownContext.Provider>
  );
};

export default App;

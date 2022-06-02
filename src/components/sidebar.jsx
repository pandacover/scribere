import React, { useContext, useState } from "react";
import { MarkdownContext } from "../App.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./loader.jsx";

const CreateNotePopup = ({ setToggleCreateNoteTitle }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const { setToggleNotesContainer } = useContext(MarkdownContext);
  const [isLoading, setIsLoading] = useState(false);
  const [stateTitle, setStateTitle] = useState("");

  const handleOnAdd = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setToggleCreateNoteTitle(false);
      setToggleNotesContainer(true);
    }, 3000);
  };

  return (
    <motion.div
      className="flex flex-col w-4/12"
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="w-full h-8 bg-surface-black text-white flex items-center justify-center">
        Add a title
      </div>
      <div className="w-full h-28 bg-black flex flex-col p-2 justify-between">
        <input
          maxLength={48}
          value={stateTitle}
          onChange={({ currentTarget: target }) => setStateTitle(target.value)}
          className="bg-opacity-20 bg-white text-white px-2 py-1 outline-none"
          type="text"
          placeholder="Start typing..."
        />
        <div className="flex justify-between items-center text-white">
          <div>
            <span
              className={`${
                stateTitle.length < 32
                  ? "text-green-300"
                  : stateTitle.length >= 32 && stateTitle.length < 48
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {stateTitle.length}
            </span>{" "}
            / <span>48</span>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="flex gap-2 items-center px-6 py-2 bg-indigo-500 rounded-md"
              onClick={(e) => handleOnAdd(e)}
            >
              {isLoading ? "Adding" : "Add"} {isLoading ? <Loader /> : ""}
            </button>
            <button
              type="button"
              onClick={() => setToggleCreateNoteTitle(false)}
              className="bg-black py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Sidebar = () => {
  const [toggleCreateNoteTitle, setToggleCreateNoteTitle] = useState(false);
  return (
    <div className="p-4 border dark:border-zinc-800 dark:text-white h-container-height -mt-[1px] col-span-1 w-full">
      <div className="flex items-center justify-center">
        <button
          onClick={() => setToggleCreateNoteTitle(true)}
          className="flex items-center justify-center font-medium rounded-md bg-indigo-500 hover:bg-indigo-400 px-4 py-2 transition-all duration-150"
          type="button"
        >
          New Note
        </button>
      </div>
      <AnimatePresence>
        {toggleCreateNoteTitle ? (
          <div className="absolute top-0 left-0 bg-black bg-opacity-40 flex items-center justify-center w-full h-screen">
            <CreateNotePopup
              setToggleCreateNoteTitle={setToggleCreateNoteTitle}
            />
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;

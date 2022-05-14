import React, { useState, useContext } from 'react'
import { MarkdownContext } from '../App.jsx'
import RemarkMarkdown from '../utilities/useRemark';

const Notes = () => {
  const [markdown, setMarkdown] = useState('');
  const { toggleNotesContainer } = useContext(MarkdownContext)
  const handlePress = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;

      e.currentTarget.value =
        e.currentTarget.value.substring(0, start) +
        "  " +
        e.currentTarget.value.substring(end);
      e.currentTarget.selectionEnd = start + 2;
    }
  }
  return (
    <> {toggleNotesContainer ?
      (<div className='h-container-height flex-[4] border dark:border-zinc-800 -mt-[1px] -ml-[1px] text-white flex gap-2'>
        <div className='flex-1'>
          <textarea
            className='p-4 w-full h-full overflow-y-scroll overflow-x-hidden resize-none bg-white bg-opacity-10 border-0 outline-none'
            onKeyDownCapture={(e) => handlePress(e)}
            value={markdown}
            onChange={({ currentTarget }) => setMarkdown(currentTarget.value)}
          />
        </div>
        <div className='flex-1 overflow-y-scroll max-w-full'>
          <RemarkMarkdown>
            {markdown}
          </RemarkMarkdown>
        </div>
      </div>) : (<div className='h-container-height flex-[4] border dark:border-zinc-800 -mt-[1px] -ml-[1px]' />)}
    </>
  )
}

export default Notes

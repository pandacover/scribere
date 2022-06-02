import React, { useState, useContext } from "react";
import { MarkdownContext } from "../App.jsx";
import RemarkMarkdown from "../utilities/useRemark";

const Notes = () => {
  const [markdown, setMarkdown] = useState("");
  const { toggleNotesContainer } = useContext(MarkdownContext);
  const [isPreview, setIsPreview] = useState(false);
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
  };
  return (
    <>
      {" "}
      {toggleNotesContainer ? (
        <div className="h-container-height w-full col-span-4 border dark:border-zinc-800 -mt-[1px] -ml-[1px] text-white text-sm grid grid-rows-8">
          <div className="flex justify-center items-center w-full row-span-1 divide-x-2">
            <button
              className="pr-4 font-semibold disabled:opacity-40"
              onClick={() => setIsPreview(false)}
              disabled={!isPreview}
            >
              Write
            </button>
            <button
              className="pl-4 font-semibold disabled:opacity-40"
              onClick={() => setIsPreview(true)}
              disabled={isPreview}
            >
              Preview
            </button>
          </div>
          {!isPreview ? (
            <>
              <div className="row-span-7 overflow-y-scroll">
                <textarea
                  className="resize-none w-full h-full bg-opacity-10 bg-white p-4"
                  onKeyDownCapture={(e) => handlePress(e)}
                  value={markdown}
                  onChange={({ currentTarget }) =>
                    setMarkdown(currentTarget.value)
                  }
                />
              </div>
            </>
          ) : (
            <div
              className="row-span-7 p-4 overflow-y-scroll whitespace-pre-wrap w-full h-full"
              style={{ overflowWrap: "break-word" }}
            >
              <RemarkMarkdown>{markdown}</RemarkMarkdown>
            </div>
          )}
        </div>
      ) : (
        <div className="h-container-height col-span-4 border dark:border-zinc-800 -mt-[1px] -ml-[1px]" />
      )}
    </>
  );
};

export default Notes;

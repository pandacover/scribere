import ReactMarkdown from "react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const RemarkMarkdown = ({ children }) => {
  return (
    <div>
      <pre>
        <ReactMarkdown
          children={children}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={match[1]}
                  showLineNumbers={true}
                  wrapLongLines={true}
                  customStyle={{
                    backgroundColor: "transparent",
                    opacity: 1,
                    marginTop: "-2em"
                  }}
                  codeTagProps={{
                    style: {
                      color: "#fff"
                    }
                  }}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        />
      </pre>
    </div>
  );
};
export default RemarkMarkdown;


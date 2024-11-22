import React from "react";
import classNames from "classnames";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco, dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ snippet, language, theme }) => {
  return (
    <div
      className={classNames("code-display", {
        "dark-theme": theme === "dark",
        "light-theme": theme === "light",
      })}
    >
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? dracula : docco}
      >
        {snippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;

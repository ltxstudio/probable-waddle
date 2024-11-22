import React from "react";
import { Box } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ snippet, language }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        p: 2,
        borderRadius: 2,
        mb: 3,
        overflow: "auto",
        maxHeight: 200,
      }}
    >
      <SyntaxHighlighter language={language} style={docco}>
        {snippet}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeDisplay;

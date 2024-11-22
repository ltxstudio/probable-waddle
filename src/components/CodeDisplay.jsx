import React from "react";
import { Box } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco, dark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeDisplay = ({ snippet, language, theme = "light" }) => {
  const codeStyle = theme === "dark" ? dark : docco;  // Dynamic style selection

  return (
    <Box
      sx={{
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#f4f4f4", // Background color based on theme
        p: 3,
        borderRadius: 2,
        mb: 3,
        overflow: "auto",
        maxHeight: { xs: 250, sm: 400 },  // Responsive max-height for different screen sizes
        minHeight: 150, // Minimum height to prevent collapsing
        boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
        transition: "all 0.3s ease-in-out", // Smooth transition for hover and background color change
        '&:hover': {
          boxShadow: theme === "dark" ? "0 4px 12px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.2)", // Hover shadow effect
          transform: "scale(1.02)", // Slight zoom-in effect on hover
        },
      }}
    >
      <SyntaxHighlighter language={language} style={codeStyle}>
        {snippet}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeDisplay;

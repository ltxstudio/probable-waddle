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
        p: 3, // Increased padding for better readability
        borderRadius: 2,
        mb: 3,
        overflow: "auto",
        maxHeight: { xs: 200, sm: 350, md: 450 },  // Responsive max-height with larger devices
        boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
        border: theme === "dark" ? "1px solid #333" : "1px solid #ddd", // Border color based on theme
        '&:hover': {
          boxShadow: theme === "dark" ? "0 4px 12px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.2)", // Hover shadow effect
        },
        '@media (max-width:600px)': {
          maxHeight: 250, // Adjust height for small screens
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

import React from "react";
import { Box } from "@mui/material";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; // A professional dark theme

const CodeDisplay = ({ snippet, language, theme = "light" }) => {
  const codeStyle = theme === "dark" ? vsDark : docco;  // Professional dark theme for dark mode, docco for light mode

  return (
    <Box
      sx={{
        backgroundColor: theme === "dark" ? "#1e1e1e" : "#f4f4f4", // Background color based on theme
        p: { xs: 3, sm: 4, md: 5 }, // Adjust padding based on screen size
        borderRadius: 2,
        mb: 3,
        overflow: "auto",
        maxHeight: { xs: 400, sm: 600, md: 800 },  // Increase max height for larger screens
        minHeight: { xs: 200, sm: 300 }, // Adjust minimum height for smaller devices
        boxShadow: theme === "dark" ? "0 4px 8px rgba(0, 0, 0, 0.3)" : "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
        transition: "all 0.3s ease-in-out", // Smooth transition for hover and background color change
        '&:hover': {
          boxShadow: theme === "dark" ? "0 4px 12px rgba(0, 0, 0, 0.5)" : "0 4px 12px rgba(0, 0, 0, 0.2)", // Hover shadow effect
          transform: "scale(1.02)", // Slight zoom-in effect on hover
        },
      }}
    >
      <SyntaxHighlighter 
        language={language} 
        style={codeStyle}
        customStyle={{
          fontSize: "1rem", // Adjust font size for better readability
          lineHeight: 1.5,  // Line height for better spacing
        }}
      >
        {snippet}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeDisplay;

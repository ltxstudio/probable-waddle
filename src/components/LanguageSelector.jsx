import React from "react";
import { MenuItem, Select, FormControl, InputLabel, Box, Typography } from "@mui/material";
import { Code as CodeIcon, Python, Java, Language as LanguageIcon } from "@mui/icons-material";

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  // Define the available languages along with their icons
  const languages = [
    { label: "JavaScript", value: "javascript", icon: <CodeIcon /> }, // Use CodeIcon for JavaScript
    { label: "Python", value: "python", icon: <Python /> },
    { label: "C", value: "c", icon: <CodeIcon /> }, // Use CodeIcon for C
    { label: "Java", value: "java", icon: <Java /> },
    { label: "Go", value: "go", icon: <LanguageIcon /> }, // Use LanguageIcon for Go
  ];

  return (
    <FormControl fullWidth sx={{ my: 3 }}>
      <InputLabel>Select Language</InputLabel>
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        label="Select Language"
        sx={{
          backgroundColor: "#fafafa", // Set background color
          fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for responsiveness
          "& .MuiSelect-icon": { fontSize: { xs: 22, sm: 24 } }, // Icon size responsiveness
        }}
      >
        {languages.map(({ label, value, icon }) => (
          <MenuItem 
            key={value} 
            value={value} 
            sx={{
              display: "flex", 
              alignItems: "center", 
              px: { xs: 1, sm: 2 }, // Adjust padding for responsiveness
              py: { xs: 1, sm: 1.5 }, // Adjust padding for responsiveness
            }}
          >
            <Box 
              sx={{
                mr: 2, 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                width: { xs: 24, sm: 28 }, // Responsive icon size
                height: { xs: 24, sm: 28 }, // Responsive icon size
              }}
            >
              {icon}
            </Box>
            <Typography variant="body1">{label}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

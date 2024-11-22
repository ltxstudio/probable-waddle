import React from "react";
import { MenuItem, Select, FormControl, InputLabel, Box } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material"; // Generic code icon
import { Python, JavaScript, CPlusPlus, Java, Go } from '@mui/icons-material';

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  const languages = [
    { label: "JavaScript", value: "javascript", icon: <JavaScript /> },
    { label: "Python", value: "python", icon: <Python /> },
    { label: "C", value: "c", icon: <CodeIcon /> },
    { label: "Java", value: "java", icon: <Java /> },
    { label: "Go", value: "go", icon: <Go /> },
  ];

  return (
    <FormControl fullWidth sx={{ my: 3 }}>
      <InputLabel>Select Language</InputLabel>
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        label="Select Language"
        sx={{
          fontSize: { xs: "14px", sm: "16px" }, // Make font size responsive
          backgroundColor: { xs: "#f5f5f5", sm: "#fff" }, // Background color on mobile
          borderRadius: 2,
          '& .MuiSelect-icon': {
            fontSize: { xs: 22, sm: 24 }, // Make the dropdown icon responsive
          },
        }}
      >
        {languages.map(({ label, value, icon }) => (
          <MenuItem key={value} value={value} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ mr: 2 }}>{icon}</Box> {/* Language Icon */}
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

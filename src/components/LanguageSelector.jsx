import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  const languages = ["javascript", "python", "c", "java", "go"];

  return (
    <FormControl
      fullWidth
      sx={{
        my: 3,
        // Adding responsive margin and padding
        "@media (max-width: 600px)": {
          my: 2, // smaller margin on mobile screens
        },
      }}
    >
      <InputLabel
        sx={{
          fontSize: { xs: "14px", sm: "16px" }, // Smaller font size on mobile
        }}
      >
        Select Language
      </InputLabel>
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        label="Select Language"
        sx={{
          fontSize: { xs: "14px", sm: "16px" }, // Smaller font size on mobile
          padding: { xs: "8px", sm: "12px" },  // Responsive padding
          backgroundColor: "#f5f5f5",          // Light background color
          "& .MuiSelect-icon": {
            fontSize: { xs: 20, sm: 24 },      // Adjust icon size based on screen size
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;

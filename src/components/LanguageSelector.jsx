import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const LanguageSelector = ({ selectedLanguage, onChange }) => {
  const languages = ["javascript", "python", "c", "java", "go"];

  return (
    <FormControl fullWidth sx={{ my: 3 }}>
      <InputLabel>Select Language</InputLabel>
      <Select
        value={selectedLanguage}
        onChange={(e) => onChange(e.target.value)}
        label="Select Language"
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

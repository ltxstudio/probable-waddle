import React, { useState, useEffect } from "react";
import { TextField, LinearProgress, Box, Typography } from "@mui/material";

const TypingArea = ({ snippet, onProgress, onComplete }) => {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);

  // Calculate progress, WPM, and accuracy
  useEffect(() => {
    const progress = Math.round((input.length / snippet.length) * 100);
    const duration = startTime ? (Date.now() - startTime) / 1000 : 0;
    const words = input.split(" ").length;
    const wpm = duration ? Math.round((words / duration) * 60) : 0;
    const accuracy = Math.max(
      0,
      100 - (errorCount / snippet.length) * 100
    ).toFixed(2);

    // Pass the data to the parent component
    onProgress({ progress, wpm, accuracy });

    if (input === snippet) {
      onComplete({ wpm, accuracy });
    }
  }, [input, snippet, startTime, errorCount, onProgress, onComplete]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now()); // Start timer when typing starts

    // Increment error count if there's a mistake
    if (snippet.startsWith(value)) {
      setInput(value);
    } else {
      setErrorCount((prev) => prev + 1);
    }
  };

  return (
    <Box sx={{ maxWidth: "100%", padding: { xs: 2, sm: 4 } }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Type the text below:
      </Typography>

      <TextField
        value={input}
        onChange={handleChange}
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        placeholder="Start typing here..."
        sx={{
          mb: 2,
          padding: 2,
          fontSize: { xs: "14px", sm: "16px" }, // Adjust font size for responsiveness
          backgroundColor: "#fafafa",
          borderRadius: 2,
        }}
      />

      <LinearProgress
        variant="determinate"
        value={(input.length / snippet.length) * 100}
        sx={{
          height: 8,
          borderRadius: 2,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3f51b5", // Progress color
          },
        }}
      />

      <Box sx={{ mt: 2 }}>
        <Typography variant="body2" color="textSecondary">
          Progress: {Math.round((input.length / snippet.length) * 100)}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          WPM: {Math.max(0, Math.round(input.split(" ").length / ((Date.now() - startTime) / 60000)))} | Accuracy: {Math.max(0, 100 - (errorCount / snippet.length) * 100).toFixed(2)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default TypingArea;

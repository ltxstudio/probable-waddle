import React, { useState, useEffect } from "react";
import { Box, TextField, LinearProgress, Typography } from "@mui/material";

const TypingArea = ({ snippet, onComplete }) => {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    if (input === snippet) {
      const duration = (Date.now() - startTime) / 1000;
      const words = snippet.split(" ").length;
      const calculatedWpm = Math.round((words / duration) * 60);
      setWpm(calculatedWpm);
      const calculatedAccuracy = Math.max(
        0,
        100 - (errorCount / snippet.length) * 100
      ).toFixed(2);
      setAccuracy(calculatedAccuracy);
      onComplete({ wpm: calculatedWpm, accuracy: calculatedAccuracy });
    }
  }, [input, snippet, startTime, errorCount, onComplete]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!startTime) setStartTime(Date.now());

    if (snippet.startsWith(value)) {
      setInput(value);
    } else {
      setErrorCount((prev) => prev + 1);
    }
  };

  const progress = (input.length / snippet.length) * 100;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        p: { xs: 2, sm: 4 },
        boxSizing: "border-box",
      }}
    >
      <TextField
        value={input}
        onChange={handleChange}
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        placeholder="Start typing here..."
        sx={{
          fontSize: { xs: "14px", sm: "16px" },
          p: { xs: 1, sm: 2 },
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
          width: "100%",
        }}
      />
      
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          width: "100%",
          height: 8,
          mt: 2,
          borderRadius: 2,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#3f51b5",
          },
        }}
      />
      
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          WPM: {wpm} | Accuracy: {accuracy}%
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Errors: {errorCount}
        </Typography>
      </Box>
    </Box>
  );
};

export default TypingArea;

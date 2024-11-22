import React, { useState, useEffect } from "react";
import { Box, TextField } from "@mui/material";

const TypingArea = ({ snippet, onComplete }) => {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    if (input === snippet) {
      const duration = (Date.now() - startTime) / 1000;
      const words = snippet.split(" ").length;
      const wpm = Math.round((words / duration) * 60);
      const accuracy = Math.max(
        0,
        100 - (errorCount / snippet.length) * 100
      ).toFixed(2);
      onComplete({ wpm, accuracy });
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

  return (
    <TextField
      value={input}
      onChange={handleChange}
      fullWidth
      multiline
      rows={6}
      variant="outlined"
      placeholder="Start typing here..."
      sx={{ mt: 2 }}
    />
  );
};

export default TypingArea;

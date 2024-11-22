import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { TextField, LinearProgress } from "@mui/material";

const TypingArea = ({ snippet, onProgress, onComplete }) => {
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    const progress = Math.round((input.length / snippet.length) * 100);
    const duration = startTime ? (Date.now() - startTime) / 1000 : 0;
    const words = input.split(" ").length;
    const wpm = duration ? Math.round((words / duration) * 60) : 0;
    const accuracy = Math.max(
      0,
      100 - (errorCount / snippet.length) * 100
    ).toFixed(2);

    onProgress({ progress, wpm, accuracy });

    if (input === snippet) {
      onComplete({ wpm, accuracy });
    }
  }, [input, snippet, startTime, errorCount, onProgress, onComplete]);

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
    <div className="typing-area">
      <TextField
        value={input}
        onChange={handleChange}
        fullWidth
        multiline
        rows={6}
        variant="outlined"
        placeholder="Start typing here..."
        className={classNames("text-input", { error: errorCount > 0 })}
      />
      <LinearProgress
        variant="determinate"
        value={(input.length / snippet.length) * 100}
        className="progress-bar"
      />
    </div>
  );
};

export default TypingArea;

import React, { useState } from "react";
import { snippets } from "./data/snippets";
import { Box, Typography, Container, Button, Grid, Switch } from "@mui/material";
import { motion } from "framer-motion";
import LanguageSelector from "./components/LanguageSelector";
import CodeDisplay from "./components/CodeDisplay";
import TypingArea from "./components/TypingArea";
import Results from "./components/Results";

const App = () => {
  const [language, setLanguage] = useState("javascript");
  const [snippet, setSnippet] = useState(snippets["javascript"][0]);
  const [wpm, setWpm] = useState(null);
  const [accuracy, setAccuracy] = useState(100);
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setSnippet(snippets[lang][Math.floor(Math.random() * snippets[lang].length)]);
    resetTest();
  };

  const resetTest = () => {
    setWpm(null);
    setAccuracy(100);
    setProgress(0);
  };

  const handleTypingProgress = (stats) => {
    setWpm(stats.wpm);
    setAccuracy(stats.accuracy);
    setProgress(stats.progress);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" gutterBottom>
          Typing Speed Test
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          color="default"
        />
      </Box>

      <LanguageSelector
        selectedLanguage={language}
        onChange={handleLanguageChange}
      />

      {!wpm ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CodeDisplay snippet={snippet} language={language} />
          <TypingArea
            snippet={snippet}
            onProgress={handleTypingProgress}
            onComplete={(stats) => {
              setWpm(stats.wpm);
              setAccuracy(stats.accuracy);
            }}
          />
          <Typography variant="subtitle1">
            Progress: {progress}% | WPM: {wpm || 0} | Accuracy: {accuracy}%
          </Typography>
        </motion.div>
      ) : (
        <Results
          wpm={wpm}
          accuracy={accuracy}
          onRestart={resetTest}
        />
      )}
    </Container>
  );
};

export default App;

import React, { useState } from "react";
import { snippets } from "./data/snippets";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
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

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setSnippet(snippets[lang][Math.floor(Math.random() * snippets[lang].length)]);
    setWpm(null);
    setAccuracy(100);
  };

  const handleComplete = (stats) => {
    setWpm(stats.wpm);
    setAccuracy(stats.accuracy);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Typing Speed Test
        </Typography>
      </motion.div>

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
          <CodeDisplay snippet={snippet} />
          <TypingArea snippet={snippet} onComplete={handleComplete} />
        </motion.div>
      ) : (
        <Results
          wpm={wpm}
          accuracy={accuracy}
          onRestart={() => handleLanguageChange(language)}
        />
      )}
    </Container>
  );
};

export default App;

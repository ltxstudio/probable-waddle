import React, { useState } from "react";
import { snippets } from "./data/snippets";
import { Box, Typography, Container, Grid, Switch, useTheme, useMediaQuery, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { Info, Build, Help } from "@mui/icons-material";
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

  // Handle responsive theme switch
  const themeMui = useTheme();
  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("sm"));

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
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontSize: isSmallScreen ? "1.5rem" : "2rem" }}>
          Typing Speed Test
        </Typography>
        <Switch
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
          color="default"
          sx={{ ml: 2 }}
        />
      </Box>

      <LanguageSelector selectedLanguage={language} onChange={handleLanguageChange} />

      {!wpm ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ mb: 4 }}>
            <CodeDisplay snippet={snippet} language={language} />
          </Box>

          <TypingArea
            snippet={snippet}
            onProgress={handleTypingProgress}
            onComplete={(stats) => {
              setWpm(stats.wpm);
              setAccuracy(stats.accuracy);
            }}
          />
          
          <Typography
            variant="subtitle1"
            sx={{
              mt: 2,
              fontSize: isSmallScreen ? "0.9rem" : "1rem",
              textAlign: "center",
            }}
          >
            Progress: {progress}% | WPM: {wpm || 0} | Accuracy: {accuracy}%
          </Typography>
        </motion.div>
      ) : (
        <Results wpm={wpm} accuracy={accuracy} onRestart={resetTest} />
      )}

      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>About</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Info sx={{ fontSize: 80, color: "primary.main", mr: 2 }} />
          <Typography variant="body1" sx={{ textAlign: "center", fontSize: isSmallScreen ? "0.9rem" : "1rem" }}>
            This is a typing speed test to help you improve your coding typing speed. 
            Select your preferred programming language and start typing!
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>Features</Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Build sx={{ fontSize: 80, color: "primary.main", mr: 2 }} />
              <Typography variant="body1" sx={{ fontSize: isSmallScreen ? "0.9rem" : "1rem", textAlign: "center" }}>
                Multiple Programming Languages<br />
                JavaScript, Python, C, Java, Go
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Help sx={{ fontSize: 80, color: "primary.main", mr: 2 }} />
              <Typography variant="body1" sx={{ fontSize: isSmallScreen ? "0.9rem" : "1rem", textAlign: "center" }}>
                Real-time Progress<br />
                Track your WPM and accuracy as you type
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>How to Use</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Help sx={{ fontSize: 80, color: "primary.main", mr: 2 }} />
          <Typography variant="body1" sx={{ textAlign: "center", fontSize: isSmallScreen ? "0.9rem" : "1rem" }}>
            1. Select your language from the dropdown.<br />
            2. Type the code as it appears in the code block.<br />
            3. Your WPM and accuracy will be tracked in real-time.<br />
            4. When you finish, your results will be displayed.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default App;

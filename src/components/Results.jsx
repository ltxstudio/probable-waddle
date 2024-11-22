import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Results = ({ wpm, accuracy, onRestart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Your Typing Results
        </Typography>
        <Typography variant="h6">Speed: {wpm} WPM</Typography>
        <Typography variant="h6">Accuracy: {accuracy}%</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onRestart}
          sx={{ mt: 3 }}
        >
          Restart
        </Button>
      </Box>
    </motion.div>
  );
};

export default Results;

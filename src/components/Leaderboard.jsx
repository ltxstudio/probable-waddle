import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const Leaderboard = ({ highScores }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Leaderboard
      </Typography>
      <List>
        {highScores.map((score, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`WPM: ${score.wpm}, Accuracy: ${score.accuracy}%`}
              secondary={`Date: ${new Date(score.timestamp).toLocaleString()}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Leaderboard;

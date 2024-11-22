import React from "react";
import { Box, Typography } from "@mui/material";

const CodeDisplay = ({ snippet }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        p: 2,
        borderRadius: 2,
        mb: 3,
        overflow: "auto",
        fontFamily: "monospace",
        fontSize: 14,
        maxHeight: 150,
      }}
    >
      <Typography component="pre">{snippet}</Typography>
    </Box>
  );
};

export default CodeDisplay;

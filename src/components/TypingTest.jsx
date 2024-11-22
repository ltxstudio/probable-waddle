import React, { useState, useEffect } from 'react';
import { Box, TextareaAutosize, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const TypingTest = ({ language }) => {
    const [code, setCode] = useState('');
    const [typedCode, setTypedCode] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        fetch(`/snippets/${language}.txt`)
            .then(res => res.text())
            .then(setCode);
    }, [language]);

    useEffect(() => {
        let timer;
        if (startTime && !endTime) {
            timer = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [startTime, endTime]);

    const handleChange = (e) => {
        if (!startTime) setStartTime(Date.now());
        setTypedCode(e.target.value);
        if (e.target.value === code) setEndTime(Date.now());
    };

    const calculateSpeed = () => {
        if (endTime && startTime) {
            const timeTaken = (endTime - startTime) / 1000; // in seconds
            const words = code.split(' ').length;
            return (words / timeTaken) * 60; // WPM
        }
        return 0;
    };

    const calculateAccuracy = () => {
        const correctChars = typedCode.split('').filter((ch, i) => ch === code[i]).length;
        return (correctChars / code.length) * 100;
    };

    return (
        <Box component={motion.div} p={2} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>Type the following code:</Typography>
                <SyntaxHighlighter language={language} style={materialDark}>
                    {code}
                </SyntaxHighlighter>
                <TextareaAutosize
                    value={typedCode}
                    onChange={handleChange}
                    minRows={5}
                    style={{ width: '100%', marginTop: '1em', padding: '1em' }}
                />
                {endTime && (
                    <Box mt={2}>
                        <Typography variant="h6">Speed: {calculateSpeed()} WPM</Typography>
                        <Typography variant="h6">Accuracy: {calculateAccuracy().toFixed(2)}%</Typography>
                    </Box>
                )}
            </Paper>
        </Box>
    );
};

export default TypingTest;

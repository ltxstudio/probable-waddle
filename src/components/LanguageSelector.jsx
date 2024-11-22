import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { Language } from '@mui/icons-material';

const languages = ['javascript', 'python', 'c', 'java', 'go'];

const LanguageSelector = ({ onSelect }) => {
    return (
        <Stack spacing={2} alignItems="center" mt={3}>
            <Typography variant="h4" gutterBottom>Select a language</Typography>
            {languages.map((lang) => (
                <Button
                    key={lang}
                    variant="contained"
                    startIcon={<Language />}
                    onClick={() => onSelect(lang)}
                    size="large"
                >
                    {lang.toUpperCase()}
                </Button>
            ))}
        </Stack>
    );
};

export default LanguageSelector;

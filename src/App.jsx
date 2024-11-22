import React, { useState } from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import TypingTest from './components/TypingTest';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';

const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <Container>
            <CssBaseline />
            <Header />
            <Box mt={5}>
                {!selectedLanguage ? (
                    <LanguageSelector onSelect={setSelectedLanguage} />
                ) : (
                    <TypingTest language={selectedLanguage} />
                )}
            </Box>
        </Container>
    );
};

export default App;

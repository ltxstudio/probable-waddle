import { useState, useEffect } from "react";

const sentences = {
  javascript: "console.log('Hello World!');",
  python: "print('Hello World!')",
  c: '#include <stdio.h>\nint main() {\n    printf("Hello, World!");\n    return 0;\n}',
  java: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}',
  go: 'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello World")\n}',
};

function App() {
  const [selectedLang, setSelectedLang] = useState('javascript');
  const [sentence, setSentence] = useState(sentences.javascript);
  const [inputText, setInputText] = useState('');
  const [timeStarted, setTimeStarted] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);
  
  const handleLanguageChange = (event) => {
    setSelectedLang(event.target.value);
    setSentence(sentences[event.target.value]);
    setInputText('');
    setElapsedTime(0);
    setWordsPerMinute(0);
  };

  useEffect(() => {
    if (inputText === sentence && timeStarted) {
      const timeInSeconds = (Date.now() - timeStarted) / 1000;
      const wordsTyped = sentence.split(' ').length;
      setWordsPerMinute(Math.round((wordsTyped / timeInSeconds) * 60));
    }
  }, [inputText]);

  const handleInputChange = (event) => {
    if (!timeStarted) setTimeStarted(Date.now());
    setInputText(event.target.value);
  };

  const resetTest = () => {
    setInputText('');
    setElapsedTime(0);
    setWordsPerMinute(0);
    setTimeStarted(null);
  };

  return (
    <div>
      <h1>Typing Speed Test</h1>
      <div>
        <label>Select Language: </label>
        <select value={selectedLang} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="c">C</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </select>
      </div>
      <p>Type this code:</p>
      <pre>{sentence}</pre>
      <textarea 
        value={inputText} 
        onChange={handleInputChange} 
        placeholder="Start typing here..." 
        rows={4} 
        cols={50}
      />
      {timeStarted && (
        <div>
          <p>Time Elapsed: {Math.round((Date.now() - timeStarted) / 1000)} seconds</p>
          <p>Speed: {wordsPerMinute} words per minute</p>
        </div>
      )}
      <button onClick={resetTest}>Restart</button>
    </div>
  );
}

export default App;

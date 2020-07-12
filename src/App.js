import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
function App() {
  const [content, setContent] = useState([
    { text: "Tab 1 content is showing here." },
    { text: "Tab 2 content is showing here." },
    { text: "Tab 3 content is showing here." },
    { text: "Tab 4 content is showing here." },
  ])

  return (
    <Tabs content={content}></Tabs>
  );
}

export default App;

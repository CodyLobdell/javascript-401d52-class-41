import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Light/Dark Toggle</h1>
      <button onClick={toggleMode}>Toggle</button>
      <p>
        This is a {isDarkMode ? 'dark' : 'light'} mode example.
      </p>
    </div>
  );
}

export default App;

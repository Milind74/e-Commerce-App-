import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rout from './components/Rout/Rout';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/context/theme';
import { GlobalStyles } from './components/context/global';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme==="light"?lightTheme:darkTheme}>
    <GlobalStyles />
   <>
   <button onClick={toggleTheme}>Toggle theme</button>

   <Rout/>
   
   </>
   </ThemeProvider>

  );
}

export default App;

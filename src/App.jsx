// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './routes/Router';
import MyChatBot from './views/chatbot/chatbot';
import { baselightTheme } from "./theme/DefaultColors";
import { MessageProvider } from './contexts/chatContext';
function App() {
  
  const routing = useRoutes(Router);
  const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>
      <MessageProvider> {/* Wrap your components with MessageProvider */}
        <MyChatBot />
        {routing}
      </MessageProvider>
    </ThemeProvider>
  );
}

export default App
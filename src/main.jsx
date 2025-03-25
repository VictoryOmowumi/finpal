import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from 'next-themes'
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './hooks/InputTheme';
import { useTheme } from 'next-themes'


const AppWithTheme = () => {
  const { theme } = useTheme();
  const appliedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <MUIThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <App />
    </MUIThemeProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <AppWithTheme />
    </ThemeProvider>
  </StrictMode>,
)

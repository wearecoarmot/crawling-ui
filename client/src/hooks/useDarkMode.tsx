import { useEffect, useState } from 'react';

export type DarkModeProps = {
  theme: Theme;
  toggleTheme: ToggleTheme;
};

export type Theme = 'light' | 'dark';

export type ToggleTheme = () => void;

const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  function setMode(mode: string) {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

export default useDarkMode;

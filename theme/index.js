import React, { useState } from "react";
import { useColorScheme } from 'react-native';

import lightTheme from './light';
import darkTheme from './dark';

// const themes = {
//   dark: {
//     backgroundColor: '#151618',
//     backgroundCard: '#25282c',
//     color: 'white'
//   },
//   light: {
//     backgroundColor: '#EFF0F3',
//     backgroundCard: '#fff',
//     color: '#1d1d1d'
//   }
// };
const initialState = {
  dark: false,
  theme: lightTheme.textColor,
  toggle: () => {}
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(useColorScheme() === 'dark' ? true : false); // Default theme is light

  // To toggle between dark and light modes
  const toggle = () => {
    setDark(!dark);
    console.log('toggled');
  };

  // Filter the styles based on the theme selected
  const theme = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ dark, theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext }

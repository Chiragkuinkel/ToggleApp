import './App.css';
import React from 'react';
import Description from './Components/part1';
import { createContext } from "react";
import { useState } from "react";
export const toggleTheme = createContext();
const App=()=> {
  const [theme,setTheme]=useState('dark');

  return (
    <toggleTheme.Provider value = {{theme,setTheme}}>
      <div id={theme}>
      <Description />
      </div>
    </toggleTheme.Provider>
    
  );
}

export default App;

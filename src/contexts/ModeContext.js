import React, { createContext, useState } from "react";

const modeContext = createContext();

const ModeContextProvider = (props) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div>
      <modeContext.Provider value={{toggleMode, isDarkMode}}>
        {props.children}
      </modeContext.Provider>
    </div>
  );
};

export { modeContext, ModeContextProvider };

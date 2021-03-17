import { createContext, useContext, useState } from "react";

const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(true);

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorScheme = () => useContext(ColorSchemeContext);

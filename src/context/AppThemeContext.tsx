import { createContext, useState } from "react";

export const AppThemeContext = createContext<any>({
  theme: "light",
  undefined,
});

export const AppThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("dark");

  return (
    <AppThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};

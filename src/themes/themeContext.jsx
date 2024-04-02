import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        light: true,
        dark: false
    });

    const changeTheme = () => {
        setTheme({light: !theme.light, dark: !theme.dark})
    }

    const value = {
        theme, 
        changeTheme,
    }

    return(
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}
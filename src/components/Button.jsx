import { useTheme } from "../themes/themeContext"
import { Outlet } from "react-router-dom";

export const Button = () => {
    const { theme, setTheme } = useTheme();
    return(
        <>
            { theme.light ? (
                <button onClick={() => setTheme({light: !theme.light, dark: !theme.dark})}>Dark mode</button>
            ) : (
                <button onClick={() => setTheme({light: !theme.light, dark: !theme.dark})}>Light mode</button>
            )}
            <Outlet />
        </>
    )
}
import { useTheme } from "../themes/themeContext"

export const Home = () => {
    const { theme } = useTheme();
    return (
        <>
            <h1 className={theme.light ? 'light' : 'dark'}>Home page</h1>
        </>
    )
}
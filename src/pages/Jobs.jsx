import { useTheme } from "../themes/themeContext"

export const Jobs = () => {
    const { theme } = useTheme();
    return (
        <>
            <h1 className={theme.light ? 'light' : 'dark'}>My Jobs</h1>
        </>
    )
}
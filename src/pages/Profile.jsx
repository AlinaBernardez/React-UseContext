import { useTheme } from "../themes/themeContext"

export const Profile = () => {
    const { theme } = useTheme();
    return (
        <>
            <h1 className={theme.light ? 'light' : 'dark'}>This is my profile</h1>
        </>
    )
}
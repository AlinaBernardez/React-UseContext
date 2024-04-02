import { useTheme } from "../themes/themeContext"
import { Link, Outlet } from "react-router-dom";

export const Button = () => {
    const { theme, changeTheme } = useTheme();
    return(
        <div className={theme.light ? 'light' : 'dark'}>
            <nav className='navbar'>
                <ul className='navList'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <Link to={'/jobs'}>Jobs</Link>
                </ul>
            { theme.light ? (
                <button onClick={() => changeTheme()}>Dark mode</button>
            ) : (
                <button onClick={() => changeTheme()}>Light mode</button>
            )}
            </nav>
            <Outlet />
        </div>
    )
}
import { createBrowserRouter } from 'react-router-dom';
import { Button } from '../components/Button';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Jobs } from '../pages/Jobs';

export const RouteApp = createBrowserRouter([
    {
        path: '/',       
        element: <Button />,
        children: [
            {path:'/', element: <Home/>},
            {path:'/profile', element: <Profile/>},
            {path:'/jobs', element: <Jobs/>},
        ]
    }
])
import { RouterProvider } from 'react-router-dom';
import './App.css'; // Archivo de estilos CSS
import { ThemeProvider, useTheme } from './themes/themeContext';
import { RouteApp } from './routes/RouteApp';


const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={RouteApp}/>
    </ThemeProvider>
  );
};

export default App;

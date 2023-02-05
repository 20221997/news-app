import { BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import {routes} from '../router/routes';


export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {
          routes.map( ({path, Component}) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        }
        <Route path="/*" element={ <Navigate to="home" replace /> } />
      </Routes>

    </BrowserRouter>
  )
}

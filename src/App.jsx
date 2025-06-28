import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';  
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={ <HomePage/> }/>
    <Route path='/products' element={ <ProductsPage/> }/>
    <Route path='*' element={ <NotFoundPage/> }/>
  </Route>
  )
);


const App = () => {
  return <RouterProvider router={router}/>;
};

export default App
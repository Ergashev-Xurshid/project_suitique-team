import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//layouts
import Rootlayout from './layout/Rootlayout';
//pages
import Home from './pages/home/Home'
import Catalog from './pages/catalog/Catalog'
import About from './pages/about/About'
import News from './pages/news/News'
import NewsDetail from './pages/news/NewsDetail'
import Contact from './pages/contact/Contact'
import Terms from './pages/termService/Terms'
import ProductDetail from './pages/productDetals/ProductDetail'
import CartPage from './pages/cart/CartPage'





function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<NewsDetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/card' element={<CartPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

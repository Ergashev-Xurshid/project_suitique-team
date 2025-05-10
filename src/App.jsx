import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

//layouts
import Rootlayout from './layout/Rootlayout'
//pages
import Home from './pages/home/Home'
import Catalog from './pages/catalog/Catalog'
import About from './pages/about/About'
import News from './pages/news/News'
import Contact from './pages/contact/Contact'
import Terms from './pages/termService/Terms'





function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App

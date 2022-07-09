import { Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Client from './pages/client'
import Home from './pages/home'
import Form from './pages/form'
import Login from './pages/login'
import SignUp from './pages/signUp'
import NotFound from './pages/notFound'
import Scheduling from './pages/scheduling'
import Technologies from './pages/technologies'

const PATH = 'Infinity' // vite.config.ts

const MyRoutes = () => {
  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/about'} element={<About />} />
      <Route path={PATH + '/contact'} element={<Contact />} />
      <Route path={PATH + '/technologies'} element={<Technologies />} />
      <Route path={PATH + '/scheduling'} element={<Scheduling />} />
      <Route path={PATH + '/login'} element={<Login />} />
      <Route path={PATH + '/signUp'} element={<SignUp />} />
      <Route path={PATH + '/form'} element={<Form />} />
      <Route path={PATH + '/client'} element={<Client />} />
      <Route path={PATH + '/*'} element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes

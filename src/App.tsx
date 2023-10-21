import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DrawerAppBar from './components/AppBar/AppBar'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import Particle from './components/Particles'
import CategoryList from './components/Category/CategoryList'
import CategoryPage from './pages/CategoryPage'

const App = () => {
  return (
    <>
      <Particle />
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Error from './components/Error'
import Footer from './components/Footer'
import Blog from './pages/Blog'

function App() {

  return (
    <div className="container mx-auto">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
      <Footer/>
    </div>
    
  )
}

export default App

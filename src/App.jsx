import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import Home from './pages/Home';
import Category from './pages/Category';
import Login from './components/Login';
import About from './pages/About';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Footer from './components/Footer';
import Postjob from './components/Postjob';
function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/postjob" element={<Postjob/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App

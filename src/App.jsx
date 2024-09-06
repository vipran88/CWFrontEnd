import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/frontend/Home";
import About from "./components/frontend/About";
import './assets/css/style.scss';
import Blog from "./components/frontend/Blog";
import Contact from "./components/frontend/Contact";
import Service from "./components/frontend/Service";
import Project from "./components/frontend/Project";




function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/service" element={<Service/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App

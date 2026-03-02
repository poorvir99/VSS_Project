import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from './components/HomePage';
import '@fontsource/playfair-display';
import '@fontsource/poppins';
import ProjectPage from "./components/Projects/ProjectPage";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import GalleryCategory from "./components/GalleryCategory";
import Founder from "./components/Founder";
import Awards from "./components/Awards";
import ProjectDetails from "./components/Projects/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  

  return (

     
    <Router>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={ <HomePage />}/>
        <Route path="/about" element={<AboutUs/>}/>
            <Route path="/founder" element={<Founder/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<GalleryCategory />} />
         <Route path="/gallery/:category" element={<GalleryCategory />}/>
        <Route path="/contact" element={<ContactUs/>}/>  
         <Route path="/award" element={<Awards/>}/>   
        <Route path="/project_detail_1" element={<ProjectDetails />} />
      </Routes>    
    </Router>
   
    
  )
}

export default App

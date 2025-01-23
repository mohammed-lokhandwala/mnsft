import { motion, useScroll } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar.js';
import Stats from './components/Stats.js';
import Photo from './components/Photo.js';
import Photo2 from './components/Photo2.js';
import Reels from './components/Reels.js';
import Testimonials from './components/Testimonials.js';
import 'font-awesome/css/font-awesome.min.css';
import Footer from './components/Footer.js';
import Carousel from './components/Carousel.js';
import Reels2 from './components/Reels2.js';
import New from './components/New.js';
import OurServices from './components/OurServices.js';
import VideoPlayer from "./components/VideoPlayer.js"
import Layout from './components/Layout.js';
import Heading from './components/Heading.js';
function App() {
  return (
    
     <Layout>

     <Navbar/>
     
     <New/>
    <Stats/>
    <Heading/>
    
    <VideoPlayer/>

    
    <Photo2/>
    <Photo/>
    <OurServices/>
    <Reels/>
    <Reels2/>
   <Testimonials/>
 
  
   <Footer/>
  
     </Layout>
    
    
  );
}

export default App;

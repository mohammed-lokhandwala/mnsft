
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
function App() {
  return (
    <div className="App">
     <>
     <Navbar/>
     <New/>
    <Stats/>
    <Carousel/>
    <Photo2/>
    <Photo/>
    <OurServices/>
    <Reels/>
    <Reels2/>
   <Testimonials/>
 
  
   <Footer/>
  
     </>
    
    
    </div>
  );
}

export default App;

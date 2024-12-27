
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


function App() {
  return (
    <div className="App">
     <>
     <Navbar/>
    <Stats/>
    <Carousel/>
    <Photo2/>
    <Photo/>
  
    <Reels/>
   <Testimonials/>
  
   <Footer/>
  
     </>
    
    
    </div>
  );
}

export default App;

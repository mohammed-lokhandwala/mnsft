import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
  const images = [
    ["sakina.png", "https://www.instagram.com/reel/DC1KQpUtJfy/"],
    ["mak.png", "https://www.instagram.com/reel/DC1KQpUtJfy/"],
    ["fomo.png", "https://www.instagram.com/reel/DC1KQpUtJfy/"],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
    
    
<div className='heading-text'>Take a look at our work</div>
      {/* Sliding content */}
      <div
        className="carousel-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="carousel-image-container" key={index}>
            <a
              href={src[1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={src[0]}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

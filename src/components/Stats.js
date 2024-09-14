import React, { useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const statsSection = statsRef.current;
    const statNumbers = statsSection.querySelectorAll('.stat-number');

    const animateStats = (entry) => {
      if (entry[0].isIntersecting) {
        statNumbers.forEach((stat) => {
          let startValue = 0;
          const endValue = parseInt(stat.getAttribute('data-target'), 10);
          const increment = endValue / 100;
          const speed = 30; 
          
          const counter = setInterval(() => {
            startValue += increment;
            if (startValue >= endValue) {
              stat.innerText = endValue;
              clearInterval(counter);
            } else {
              stat.innerText = Math.ceil(startValue);
            }
          }, speed);
        });
      }
    };

    const observer = new IntersectionObserver(animateStats, {
      threshold: 0.5,
    });

    observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-main" ref={statsRef}>
      <div className="numbers">
        <div className="p1">
          <div className='logo'> <img src='camera.png' alt="Videos Created Logo" /> </div>
          <div className='stats-number'>
            <div className='stat-number' data-target="1000">0</div>
            <div>Videos Created</div>
          </div>
        </div>

        <div className="p1">
          <div className='logo'> <img src='brand-image.png' alt="Brands Worked With Logo" /> </div>
          <div className='stats-number'>
            <div className='stat-number' data-target="30">0</div>
            <div>Worked With</div>
          </div>
        </div>

        <div className="p1">
          <div className='logo'> <img src='teamwork.png' alt="Team Members Logo" /> </div>
          <div className='stats-number'>
            <div className='stat-number' data-target="20">0</div>
            <div>Team Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;

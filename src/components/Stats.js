import React, { useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
const statsRef = useRef(null);

useEffect(() => {
  const statsSection = statsRef.current;
  const statNumbers = statsSection.querySelectorAll('.stat-number');

  const animateStats = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNumbers.forEach((stat) => {
          const endValue = parseInt(stat.getAttribute('data-target'), 10);
          const increment = Math.ceil(endValue / 100);
          let currentValue = 0;

          const updateStat = () => {
            currentValue += increment;
            if (currentValue >= endValue) {
              stat.innerText = endValue;
            } else {
              stat.innerText = currentValue;
              requestAnimationFrame(updateStat);
            }
          };

          updateStat();
        });
      }
    });
  };

  const observer = new IntersectionObserver(animateStats, {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Adjust bottom margin to handle mobile
    threshold: 0.25, // Trigger when 25% of the element is visible
  });

  observer.observe(statsSection);

  return () => observer.disconnect();
}, []);


  return (
    <div className="stats-main" ref={statsRef}>
      <div className="numbers">
        <div className="p1">
          <div className='logo'> <img src='camera1.png' alt="Videos Created Logo" /> </div>
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
            <div className='stat-number' data-target="4">0</div>
            <div>Team Members</div>
          </div>
        </div>
      </div>

   <div className='headings'>
   <h3 className='stats-headline'>What We Do at MNFST Agency</h3>
   <p>If you're ready to level up your brand, whether through organic growth,
personal branding, or persuasive video ads, MNFST Agency is your go-to
partner.</p>
   </div>


   <div className='content'>
    <div className='item'>
      <div className='logo'> <img src="layer.png" /> </div>
      <h4 className='head'>Organic Content <br/> Mastery</h4>
      <p className='para'>We help brands go viral by focusing on authenticity, relatability, and consistent value. From LinkedIn thought leadership to Instagram Reels, we craft content that not only grabs attention but also drives real results.
.</p>
    </div>

    <div className='item'>
      <div className='logo'> <img src="camera.png" /> </div>
      <h4 className='head'>Tailored Strategies <br/> for Maximum Impact</h4>
      <p className='para'>Unlike agencies that rely on cookie-cutter approaches, we design strategies that are unique
to each client. We combine data-driven insights with a creative flair, ensuring that every piece
of content hits the mark.</p>
    </div>

    <div className='item'>
      <div className='logo'> <img src="content1.png" /> </div>
      <h4 className='head'>Personal Branding</h4>
      <p className='para'>Your personal brand is your most valuable asset. We help you polish your content to perfection, ensuring it flows seamlessly, tells your unique story, and keeps your audience engaged,we make sure your brand leaves a lasting impression. </p>
    </div>
          
  
   </div>
  
    </div>
  );
};

export default Stats;

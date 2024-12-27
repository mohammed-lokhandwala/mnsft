import React from 'react';
import './Reels.css';


const Reels = () => {
  return (
    <div className='rmain'>
      <div className='headings'>
        <h3 className='stats-headline'>
          Focused on strategic content creation for Instagram and LinkedIn
        </h3>
        <p>
        We excel in strategic content creation for Instagram and LinkedIn, delivering campaigns that boost both reach and revenue. 
        </p>
      </div>

      <div className='reels'>
<a href='https://www.instagram.com/p/DCUUJgzyc01/'>
<div className='reel-container'>
          <img src='1.png' alt='Item 1' />
        </div>
</a>
       
<a href='https://www.instagram.com/reel/DCB3itFtdUx/'>
<div className='reel-container'>
          <img src='2ph.png' alt='Item 2' />
        </div>

</a>
        

        <div className='reel-container'>
          <img src='3ph.png' alt='Item 3' />
        </div>


      </div>
    </div>
  );
};

export default Reels;

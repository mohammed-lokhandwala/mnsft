import React from 'react';
import './Reels2.css';


const Reels2 = () => {
  return (
    <div className='rmain'>
      <div className='headings'>
        <h3 className='stats-headline'>
        Helped scale D2C brands by optimizing their storytelling,
        
        </h3>
        <p>
        creating persuasive video content, and driving engagement 
        </p>
      </div>

      <div className='reels'>
<a href='https://www.instagram.com/p/DCUUJgzyc01/'>
<div className='reel-container'>
          <img src='reel1.png' alt='Item 1' />
        </div>
</a>
       
<a href='https://www.instagram.com/reel/DCB3itFtdUx/'>
<div className='reel-container'>
          <img src='reels2.png' alt='Item 2' />
        </div>

</a>
        

        <div className='reel-container'>
          <img src='reels3.png' alt='Item 3' />
        </div>


      </div>
    </div>
  );
};

export default Reels2;

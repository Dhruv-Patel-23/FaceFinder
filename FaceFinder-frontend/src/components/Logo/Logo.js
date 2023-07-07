import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';

import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '5px'}} alt='logo' src="https://th.bing.com/th/id/OIP.OLpizdx0mWK6bbSOYcgnTwHaFj?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
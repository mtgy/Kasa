import './Banner.scss';
import React from 'react';

const Banner = ({ text, imageUrl }) => {
    return (
        <div className="banner">
        {text && <h2>{text}</h2>}
        <img src={imageUrl} alt="Bannière" />
      </div>
    );
  };

export default Banner;
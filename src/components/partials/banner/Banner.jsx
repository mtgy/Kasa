import React, { useEffect, useRef } from 'react';
import './Banner.scss'; // Assurez-vous d'importer votre fichier CSS/SCSS ici

const Banner = ({ textBanner, imageUrl }) => {
  const h1Ref = useRef();

  useEffect(() => {
    if (h1Ref.current && textBanner) {
      const newText = textBanner.split(', ').map((segment, index, array) => {

        return index === array.length - 1 ? segment : `${segment},\n`;
      }).join('');
      h1Ref.current.innerHTML = newText;
    }
  }, [textBanner]);

  return (
    <div className="banner">
      {textBanner && <h1 ref={h1Ref}></h1>}
      <img src={imageUrl} alt="Bannière" />
    </div>
  );
};

export default Banner;

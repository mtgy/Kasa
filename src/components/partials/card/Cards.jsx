import React from 'react';
import './Cards.scss'; 

const Card = ({ title, cover }) => {
    return (
      <div className="card">
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </div>
    );
  };
  
  
  const Cards = ({ data }) => {
    return (
      <div className="cardList">
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    );
  };
export default Cards;
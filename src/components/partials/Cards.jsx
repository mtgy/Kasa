import React from 'react';

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
      <div className="card-list">
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    );
  };
export default Cards;
import React from 'react';
import HorizontalLine from '../../atoms/HorizontalLine/HorizontalLine';
import './Card.styles.css';

interface CardProps {
  imageUrl: string;
  title: string;
  description?: string;
  lastUpdated: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  lastUpdated,
}) => {
  return (
    <>
      <div className='card'>
        <div className='card-content'>
          <h1 className='card-title'>{title}</h1>
          <p className='card-description'>{description}</p>
          <p className='card-last-updated'>{lastUpdated}</p>
        </div>
        <img src={imageUrl} alt={title} className='card-image' />
      </div>
      <HorizontalLine color={'#EEEEEE'} height={2} />
    </>
  );
};

export default Card;

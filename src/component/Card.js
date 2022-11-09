import React from "react";
import { useState, useEffect } from 'react';

const Card = ({card, handleCardClick}) => {

  const handleClick = () => {
    handleCardClick(card)
  }
  
  return (
    <div className="card" onClick={handleClick}>
      {card.card}
    </div>
  )
}

export default Card
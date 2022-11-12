import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState, useEffect } from 'react';

const Card = ({ card, index, handleCardClick, isCardChosen}) => {
  const handleClick = () => {
    handleCardClick(card.type, index)
  }

  return (
    <div className="card" onClick={handleClick}>
      {isCardChosen(card.type, index) 
        ? <b>chosen + {card.type}</b> 
        : <b>not chosen</b>}
    </div>
  )
}

export default Card
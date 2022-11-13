import React from "react";

const Card = ({ card, index, handleCardClick, isCardChosen}) => {
  const handleClick = () => {
    handleCardClick(card.type, index)
  }

  return (
    <div className="card" onClick={handleClick}>
      {isCardChosen(card.type, index) 
        ? <b>{card.type}</b> 
        : <b>not chosen</b>}
    </div>
  )
}

export default Card
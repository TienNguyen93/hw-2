import React from "react";

const Card = ({ card, index, handleCardClick, isCardChosen}) => {
  const handleClick = () => {
    handleCardClick(card.type, index)
  }

  const style = {
    card: {
      height: "100px",
      width: "90px",
      backgroundColor: "#F5F5DC",
      color: "blue",
      cursor: "pointer",
      position: "relative",
      borderRadius: "15px"
    }
  }

  return (
    <div style={style.card} onClick={handleClick}>
      {isCardChosen(card.type, index) 
        ? 
        <div style={{...style.card, border: '1.5px solid black'}}>
          <h3>{card.type}</h3>
        </div> 
        : <div style={{...style.card, 
          backgroundColor: '#C576F6'}}></div> }
    </div>
  )
}

export default Card
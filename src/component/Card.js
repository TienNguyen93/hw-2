import React from "react";

const Card = (props) => {
  const handleClick = () => {
    !props.isFlipped && props.onClick(props.index)
  }

  if (props.isFlipped === false) {
    return (
      <div className="card" onClick={handleClick}>
        {props.card.card}
      </div>
    )
  }

  return (
    <div>
      <div className="card-flip" onClick={handleClick}>
        {props.card.value}
      </div>
    </div>
  )
}

export default Card
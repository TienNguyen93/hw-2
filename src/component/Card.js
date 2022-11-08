import React from "react";
import { useState } from "react";

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    console.log(isFlipped)
  }

  if (isFlipped === false) {
    return (
      <div className="card" onClick={handleClick}>
        {props.cardValue}
      </div>
    )
  }

  return (
    <div className="card-flip" onClick={handleClick}>
      {props.cardValue}
    </div>
  )

}

export default Card
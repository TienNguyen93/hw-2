import './App.css';
import Card from './component/Card';
import {useState} from 'react';

// shuffle function
function shuffle(arr) {
  const length = arr.length
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i)
    const currentIndex = i - 1
    const tmp = arr[currentIndex]
    arr[currentIndex] = arr[randomIndex]
    arr[randomIndex] = tmp
  }
  console.log(arr)
  return arr
}

function App() {
  const cardValues = [
    {
      card: "Card",
      value: "orange"
    },
    {
      card: "Card",
      value: "apple"
    },
    {
      card: "Card",
      value: "melon"
    },
    {
      card: "Card",
      value: "strawberry"
    }
  ]
  const [cards, setCards] = useState(shuffle.bind(null, cardValues.concat(cardValues)))
  const [flippedCards, setFlippedCards] = useState([])
  const [moves, setMoves] = useState(0)

  const handleCardsClick = (index) => {
    if (flippedCards.length === 1) {
      setFlippedCards(prev => [...prev, index])
      setMoves((moves) => moves + 1)
    } else {
      setFlippedCards([index])
    }
  }

  const checkIsFlipped = index => {
    return flippedCards.includes(index)
  }

  return (
    <div className='App'>
      <div className='card-list'>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardsClick}
            />
          )
        })}
      </div>
      <button>New Game</button>
    </div>
  );
}

export default App;

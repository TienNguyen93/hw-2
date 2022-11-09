import './App.css';
import Card from './component/Card';
import { useEffect, useState } from 'react';

const cardValues = [
  {
    card: "Card",
    type: "orange"
  },
  {
    card: "Card",
    type: "apple"
  },
  {
    card: "Card",
    type: "melon"
  },
  {
    card: "Card",
    type: "strawberry"
  }
]

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
  return arr
}

function App() {
  const [cards, setCards] = useState([])
  const [clickOne, setClickOne] = useState(null)
  const [clickTwo, setClickTwo] = useState(null)

  // create a shuffled board of cards
  const createBoard = () => {
    const board = cardValues.concat(cardValues)
    const shuffled = shuffle(board)
    setCards(shuffled)
  }

  const handleCardClick = (card) => {
    clickOne ? setClickTwo(card) : setClickOne(card)
  }

  console.log(clickOne, clickTwo)

  // compare the selected cards
  // useEffect for when the app first mount & 
  // when the dependency changes 
  useEffect(() => {
    // if clickOne and clickTwo are not null
    if (clickOne && clickTwo) {
      if (clickOne.type === clickTwo.type) {
        console.log('cards match')
        reset()
      } else {
        console.log('no match')
        reset()
      }
    }
  }, [clickOne, clickTwo])
  

  // reset if 2 cards don't match
  const reset = () => {
    setClickOne(null)
    setClickTwo(null)
  }

  return (
    <div className='App'>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card 
            key={index} 
            card={card} 
            handleCardClick={handleCardClick}/>
        ))}
      </div>
      <button onClick={createBoard}>New Game</button>
    </div>
  );
}

export default App;

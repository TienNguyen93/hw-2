import './App.css';
import Card from './component/Card';
import { useEffect, useState } from 'react';

const cardValues = [
  {
    card: "Card",
    type: "Orange",
    match: false
  },
  {
    card: "Card",
    type: "Apple",
    match: false
  },
  {
    card: "Card",
    type: "Melon",
    match: false
  },
  {
    card: "Card",
    type: "Grape",
    match: false
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
  const [cardsChosen, setCardsChosen] = useState([])    
  const [cardsChosenIds, setCardsChosenIds] = useState([]) 
  const [openCards, setOpenCards] = useState([])

  // create a shuffled board of cards
  const createBoard = () => {
    const board = cardValues.concat(cardValues)
    const shuffled = shuffle(board)
    setCards(shuffled)
  }

  const flipCard = (card, index) => {
    console.log("card here", card, index)

    if (cardsChosenIds.length === 1 && cardsChosenIds[0] === index) {
      console.log('huh?')
      return
    }

    if (cardsChosen.length < 2) {
      setCardsChosen(cardsChosen => cardsChosen.concat(card))
      setCardsChosenIds(cardsChosenIds => cardsChosenIds.concat(index))

      console.log('cards chosen ', cardsChosen)
      console.log('cards chosen id', cardsChosenIds)

      if (cardsChosen.length === 1) {
        // check if the types are the same
        if (cardsChosen[0] === card) {
          setOpenCards(openCards => openCards.concat([cardsChosen[0], card]))
        }
        setTimeout(() => {
          setCardsChosenIds([])
          setCardsChosen([])
        }, 700)
      }
    }
  }

  const isCardChosen = (card, index) => {
    return cardsChosenIds.includes(index) || openCards.includes(card)
  }

  // set everything to initial state 
  // & shuffle the cards
  const resetGame = () => {
    setCardsChosen([])
    setCardsChosenIds([])
    setOpenCards([])
    createBoard()
  }

  // fire when app runs
  useEffect(() => {
    createBoard()
  }, [])

  return (
    <div className='App'>
      <h1>Welcome to Memory Card Game!</h1>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card 
            key={index} 
            card={card}
            index={index}
            handleCardClick={flipCard}
            isCardChosen={isCardChosen}
          />
        ))}
      </div>
      {openCards.length === cards.length 
        ? <h1>You won!</h1> 
        : ""}
      <button onClick={resetGame}>
        <h3>New Game</h3>
      </button>
    </div>
  );
}

export default App;

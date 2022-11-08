import './App.css';
import Card from './component/Card';

function App() {
  const cardValues = [
    "Card1", "Card2", "Card3", "Card4",
    "Card5", "Card6", "Card7", "Card8"
  ]

  return (
    <div className='App'>
      <div className='card-list'>
        {cardValues.map((card, idx) => (
          <Card key={idx} cardValue={card} />
        ))}
      </div>

    </div>
  );
}

export default App;

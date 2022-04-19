import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "./img/1.png", matched: false },
  { "src": "./img/2.png" , matched: false},
  { "src": "./img/3.png", matched: false   },
  { "src": "./img/4.png", matched: false },
  { "src": "./img/5.png", matched: false },
  { "src": "./img/6.png", matched: false  }
]

function App() {
  //States
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setdisabled] = useState(false)


  //Steps:
  //duplicate each card 
  //randomize the card other in the array using sort
  // give a random id to each image - KEY
  const shuffleCards = () => {

    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  //handle click/choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  //comparing cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      //disabled every card
      setdisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched:true}
            } else {
              return card
            }
          })
        })

        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])

  // reset choices and increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setdisabled(false)
  }

  //start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: { turns }</p>
    </div>
  );
}

export default App;

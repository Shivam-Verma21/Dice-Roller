import { useState } from 'react'
import './App.css'
import diceone from "./assets/dice-one.png"
import dicetwo from "./assets/dice-two.png"
import dicethree from "./assets/dice-three.png"
import dicefour from "./assets/dice-four.png"
import dicefive from "./assets/dice-five.png"
import dicesix from "./assets/dice-six.png"

function App() {
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [rolling, setRolling] = useState(false)

  const diceImages = [diceone, dicetwo, dicethree, dicefour, dicefive, dicesix]

  const rollDice = () => {
    if (rolling) return;
    setRolling(true);

    setTimeout(() => {
      const number1 = Math.floor(Math.random() * 6) + 1
      const number2 = Math.floor(Math.random() * 6) + 1
      setDice1(number1)
      setDice2(number2)
      setRolling(false)
    }, 1000);
  }

  return (
    <div className='container'>
      <h1>Dice Roller</h1>
      <div className="dices">
        <img src={diceImages[dice1 - 1]} alt={`Dice ${dice1}`} />
        <img src={diceImages[dice2 - 1]} alt={`Dice ${dice2}`} />
      </div>
      <button onClick={rollDice}>
        {rolling ? "Rolling.." : "Roll Dices"}
      </button>
    </div>
  )
}

export default App

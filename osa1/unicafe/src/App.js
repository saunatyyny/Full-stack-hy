import { useState } from 'react'

const Button = ({name, handleClick}) => (
  <button onClick={handleClick}>{name}</button>
)
const StatisticLine = (props) => {
  return(
    <table>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    </table>
  )
}
const Statistics = (props) => {
  if (props.counter === 0){

    return <p>No feedback given</p>

  }
  return(


  <div>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="average" value={(props.summa/props.counter).toFixed(1)} />
    <StatisticLine text="positive" value={((props.pos/props.counter)*100).toFixed(1) + " %"} />
  </div>
  /*
    <dt>good {props.good}</dt>
    <dt>neutral {props.neutral}</dt>
    <dt>bad {props.bad}</dt>
    <dt>average {props.summa/props.counter}</dt>
    <dt>positive {(props.pos/props.counter)*100} %</dt>
*/

  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [counter, setCounter] = useState(0)
  const [summa, setSumma] = useState(0)
  const [pos, setPos] = useState(0)

  const handleClickGood = () => {
    setGood(good+1)
    setCounter(counter+1)
    setSumma(summa+1)
    setPos(pos+1)
  }
  const handleClickNeutral = () => {
    setNeutral(neutral+1)
    setCounter(counter+1)
    setSumma(summa+0)
  }
  const handleClickBad = () => {
    setBad(bad+1)
    setCounter(counter+1)
    setSumma(summa-1)
  }
  return (
    
    <div>
      <h1>give feedback</h1>
      <Button name="good" handleClick={handleClickGood} />
      <Button name="neutral" handleClick={handleClickNeutral} />
      <Button name="bad" handleClick={handleClickBad} />
      <h1>statistics</h1>
      <Statistics counter={counter} good={good} neutral={neutral} bad={bad} summa={summa} pos={pos} />
      
    </div>
  )
}


export default App
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [total, setTotal] = useState(0)

  const handlesetGood = () => {
    setGood(good + 1)
    // setTotal(good + neutral + bad + 1)
  }
  const handlesetNeutral = () => {
    setNeutral(neutral + 1)
    // setTotal(good + neutral + bad + 1)
  }
  const handlesetBad = () => {
    setBad(bad + 1)
    // setTotal(good + neutral + bad + 1)
  }
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handlesetGood} text='good' />
      <Button handleClick={handlesetNeutral} text='neutral' />
      <Button handleClick={handlesetBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  if (total > 0) return (
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive} %</td>
        </tr>
      </tbody>
    </table>
  )

  return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

// const StatisticLine = ({text, value}) => {
//   if (text == "positive") return (
//     <div>
//       <p>{text} {value}%</p>
//     </div>
//   )
//   return (
//     <div>
//       <p>{text} {value}</p>
//     </div>
//   )
// }

export default App
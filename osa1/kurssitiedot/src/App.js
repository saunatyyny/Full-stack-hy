const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>   
  )
}
const Part = (props) =>{
  return(
    <div>
      <p>
        {props.nimi} {props.exercises}
      </p>
    </div>
  )
}
const Content = (props) => {
  return(
    <div>
      <Part nimi = {props.osat[0]} exercises = {props.pisteet[0]}/>
      <Part nimi = {props.osat[1]} exercises = {props.pisteet[1]}/>
      <Part nimi = {props.osat[2]} exercises = {props.pisteet[2]}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.yhteensa[0] + props.yhteensa[1] + props.yhteensa[2]}</p>
    </div>   
  )
}

const App = () => {

  const course = 'Half Stack application development'
/*
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
*/
  const parts = [
    'Fundamentals of React',
    'Using props to pass data',
    'State of a component'
  ]

  const exercises = [
    10,
    7,
    14
  ]

  return (
    <div>
      <Header course={course} />
      <Content osat={parts} pisteet={exercises} />

      <Total yhteensa = {exercises}/>
    </div>
  )
}

export default App
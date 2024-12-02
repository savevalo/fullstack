const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content part={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <p>name of course: {props.course.name}</p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part[0].name}</p>
      <p>{props.part[1].name}</p>
      <p>{props.part[2].name}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  const total = props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
  return (
    <p>total number of exercises: {total}</p>
  )
}

export default App
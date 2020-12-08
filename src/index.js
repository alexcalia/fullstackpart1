import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probbaly born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <p>Greeting app created by <a href="https://alexcalia.com">Alex Calia</a></p>
    </>
  )
}

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

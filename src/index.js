import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age
  }

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
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
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);

  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
      <Footer />
      <button onClick={increaseByOne}>plus</button>
      <button onClick={setToZero}>Reset</button>
      <p>{counter}</p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

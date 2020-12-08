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

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  const name = "Peter";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26+10} />
      <Hello name={name} age={age} />
      <Footer />
      <Button handleClick={increaseByOne} text="Plus" />
      <Button handleClick={decreaseByOne} text="Minus" />
      <Button handleClick={setToZero} text="Reset" />
      <Display counter={counter} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

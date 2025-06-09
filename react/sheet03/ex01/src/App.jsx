import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';

const CounterContext = createContext(0);

function Home() {
  return (<h1>Estás en Home</h1>)
}

function About() {
  return (<h2>Estás en About</h2>)
}

function Contact() {
  return (<h3>Estás en Contact</h3>)
}

function NavBar() {
  return (
    <nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
      <p>
        <NavLink to="/about">About</NavLink>
      </p>
      <p>
        <NavLink to="/contact">Contact</NavLink>
      </p>
    </nav>
  )
}

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(prev => prev + 1);

  return (
        <CounterContext.Provider value={{ counter, increment}}>
          {children}
        </CounterContext.Provider>
  )
}

function CounterMuestra() {
  const {counter} = useContext(CounterContext);
  return (
    <div><h1>Counter: {counter}</h1></div>
  )
}
function CounterSuma() {
  const {increment} = useContext(CounterContext);
  return (
    <div><button onClick={increment}>Suma</button></div>
  )
}

function App() {

  return (
    <>
        <NavBar></NavBar>
        

        <CounterProvider>
          <CounterMuestra />
          <CounterSuma />
        </CounterProvider>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import './App.css'

const Waterperday = () => {
  const [Weight, setWeight] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
    console.log(Weight)
  }

  return (
    <div className={`${darkMode ? 'container' : 'dark-mode'}`}>
      <form>
        <p>How much water should you drink per day 🫧?</p>
        <div className='calculate'>
          <h1>{(Weight * 2.2 * (30 / 2)).toFixed()} ml.</h1>
          <label htmlFor="weight"><h2>Weight (kg.) 🦞</h2></label>
          <input type="number" id="weight" name="weight" placeholder='Your weight (kg.)' min={0} onChange={onChangeUsername} />
        </div>
      </form>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark ☾" : "Light ☼"}
      </button>
    </div>
  )
}

export default Waterperday
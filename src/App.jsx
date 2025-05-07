import { useState } from 'react';
import './App.css'

import AnimalesShow from './AnimalesShow'

function getRandomAnimal(){
  const animales = ['cat', 'bird', 'cow', 'dog', 'gator', 'horse']

  return animales[Math.floor(Math.random() * aniamles.length)]
}

function App(){
  const [animales, setAnimales] = useState([])

    const handleClick = ( ) =>{
      setAnimales ([...animales, getRandomAnimal()])

    }

    const renderedAnimales = animales.map((animal, index) => {
      return <animalesShow type = {animal} key = {index} />
    })

    return (
      <div className='app'>
        <button onClick={handleClick}>Add Animal</button>
        <div className="animales-list">
          {renderedAnimales}
        </div>
      </div>
    )
}

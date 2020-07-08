import React, { useState, useEffect } from 'react';
import './App.css';
import { findAllByTestId } from '@testing-library/react';


function App() {
  const [weight, setNewWeight] = useState('')
  const [fat, setFat] = useState('')
  const [muscle, setMuscle] = useState('')

  //Function that handles adding new data to the database
  const addData = (event) => {
    event.preventDefault()

    var today = new Date()
    var date = today.getDate() + '.' + today.getMonth() + '.' + today.getFullYear()

    const dataObject = {
      date: date,
      weight: weight,
      fat: fat,
      muscle: muscle,
    }
    console.log(dataObject)
  }

  //Handlers for fields
  const handleNewWeight = (event) => {
    setNewWeight(event.target.value)
  }

  const handlefat = (event) => {
    setFat(event.target.value)
  }

  const handleMuscle = (event) => {
    setMuscle(event.target.value)
  }

  return (
  <div>
    <h1>
      Tervetuloa painonhallinta appiin. Syötä tiedot alle
    </h1>

    <div>
      Paino: <input value = {weight} onChange = {handleNewWeight}/>
    </div>

    <div>
      Rasva-%: <input value = {fat} onChange = {handlefat} />
    </div>

    <div>
      Lihas-% <input value = {muscle} onChange = {handleMuscle} />
    </div>

    <button onClick = {addData}>Tallenna</button>
  </div>

  );
}

export default App;
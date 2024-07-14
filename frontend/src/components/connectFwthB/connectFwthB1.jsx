import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // axios.get('http://localhost:4000/api/jokes')
    axios.get('/api/jokes')
    // for this to run go in vite.config.js server: {proxy: {'/api': 'http://localhost:4000'}},
    
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
    <h1>full stack</h1>
    <p>JOKES: {jokes.length}</p>
    {
      jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
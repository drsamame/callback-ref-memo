import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input type='text' id='' placeholder='Avengers, Start wars, Pokemon' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main className='page'>

      </main>

    </div>
  )
}

export default App

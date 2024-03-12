import resultMovies from './mocks/with-result.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
// import noResult from './mocks/no-result.json'
import './App.css'
import { useState, useEffect } from 'react'

const useSearch = () => {
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])
  return { query, error, setQuery }
}

function App () {
  const { movies } = useMovies(resultMovies)
  const { query, error, setQuery } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={
              { border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }
            }
            onChange={handleChange} value={query} type='text' placeholder='Avengers, Start wars, Pokemon'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App

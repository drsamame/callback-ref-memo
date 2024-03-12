import resultMovies from './mocks/with-result.json'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
// import noResult from './mocks/no-result.json'
import './App.css'

function App () {
  const { mappedMovies } = useMovies(resultMovies)
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, Start wars, Pokemon' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App

export function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map((movie) => {
          return (
            <li key={movie.id} className='movie'>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          )
        })
      }
    </ul>
  )
}

export function NoResults () {
  return (
    <p>No se encontraron películas</p>
  )
}

export function Movies ({ movies }) {
  console.log(movies)
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? (
        <ListOfMovies movies={movies} />
        )
      : (
        <NoResults />
        )
  )
}

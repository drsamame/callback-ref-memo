export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
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

export function Movies ({movies}) {
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

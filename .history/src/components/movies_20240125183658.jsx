const ListOfMovies = (movies) => {
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

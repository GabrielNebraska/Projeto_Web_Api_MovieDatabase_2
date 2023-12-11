import axios from 'axios'

const token = '6e43326fae57fb63436928f25d5c8a30'

const getMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: token,
        language: 'pt-BR'
      }
    })

    const movies = response.data.results

    movies.forEach((movie) => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      movie.poster_path = imageUrl
    })

    return movies
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

const getMoviesByCategory = async (category) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: token,
        language: 'pt-BR',
        with_genres: category
      }
    })

    const movies = response.data.results
    console.log(movies)

    await movies.forEach((movie) => {
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      movie.poster_path = imageUrl
    })

    return movies
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

const getCategories = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: token,
        language: 'pt-BR'
      }
    })

    const categories = response.data.genres

    return categories
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

export { getMovies, getMoviesByCategory, getCategories }

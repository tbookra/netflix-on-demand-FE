const API_KEY = '0ec7db52277d0e30290bb2883e939895'
export const getMovie = (movie_id) => `/movie/${movie_id}`;
export const getMovieImage = (img_ending) =>   `https://image.tmdb.org/t/p/w500${img_ending}`
export const getLatest = `/movie/latest?api_key=${API_KEY}`;
export const getPopular = `/movie/popular?api_key=${API_KEY}&language=en-US`;
export const getTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const getTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const getNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_network=213`
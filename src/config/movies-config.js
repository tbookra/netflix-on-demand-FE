const API_KEY = '0ec7db52277d0e30290bb2883e939895'
const page = 2;
export const getMovie = (movie_id) => `/movie/${movie_id}?api_key=${API_KEY}`;
export const getMovieImage = (img_ending) =>   `https://image.tmdb.org/t/p/w185${img_ending}` 

export const moviesUrls = [
    {
        category:"Popular Movies",
        fetchUrl:`/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    },
    {
        category:"Top Rated Movies",
        fetchUrl:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    {
        category:"Trending Movies",
        fetchUrl:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    {
        category:"Netflix Originals",
        fetchUrl:`/discover/tv?api_key=${API_KEY}&with_network=213`
    },
    {
        category:"Action Movies",
        fetchUrl:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
]
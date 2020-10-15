import React from "react";
import * as moviesUrl from '../../config/moviesUrls'
import {MoviesRow} from '../../components'
const Home = () => {
 
  return (
    <div>
      <h1>home</h1>
      <MoviesRow title='Top Rated Movies' rowUrl={moviesUrl.getTopRated}/>
      <MoviesRow title='Trending Movies' rowUrl={moviesUrl.getTrending}/>
      <MoviesRow title='Popular Movies' rowUrl={moviesUrl.getPopular}/>
      <MoviesRow title='Netflix Originals' rowUrl={moviesUrl.getNetflixOriginals}/>
      <MoviesRow title='Action Movies' rowUrl={moviesUrl.getAction}/>
    </div>
  );
};

export default Home;

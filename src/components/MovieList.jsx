import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=6561f300d7fc7acb307a3f8baaf12255`)
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className=''>
      <h1 className='text-2xl font-bold text-center p-2'>Popular Movies</h1>
      <div className='grid grid-cols-4 gap-4 m-4'>
        {movies.map(movie => (
          <div key={movie.id} className="p-2 bg-slate-200 rounded-md transition duration-300 ease-in-out hover:bg-red-100 transform hover:-translate-y-1 hover:scale-105 ...">

            <div>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.poster_path} className="rounded-md"/>
                <h2 className='font-semibold text-sky-600 p-2 mb-2 text-start text-md'>{movie.title}</h2>
            </div>

            <div>
                <h3 className='flex justify-between'>Released:{movie.release_date} <span className='text-orange-800 font-bold'>Score:{movie.vote_average}</span></h3>
            </div>

          <div className='items-baseline'>
          <h3 className='font-medium pt-4'>Overview</h3>
          <p className='text-sm pt-1 pb-0 '>{movie.overview}</p>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

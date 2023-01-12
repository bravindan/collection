import React, { useEffect, useState } from "react";
import axios from "axios";
// import MovieList from "./MovieList";

const api={
  key:"6561f300d7fc7acb307a3f8baaf12255",
  URL:'https://api.themoviedb.org/3/movie/550?api_key=6561f300d7fc7acb307a3f8baaf12255'

}
export default function Movies() {
  // const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);

  // const handleSearchInput = (event) => {
  //   event.preventDefault();
  //   setSearchInput(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (searchInput.length > 0) {
  //     console.log(searchInput);
  //   } else {
  //     alert("Enter name and try again");
  //   }
  //   setSearchInput('')
  // };

  useEffect( () => {
    axios.get(api.URL).then((response)=>{
      setMovies(response)
      console.log(response)
    })

  }, []);

  return (
    <div className="flex items-center justify-center">
      {/* <form className="mt-4 h-12  w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8 bg-sky-200">
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            type="text"
            placeholder="Search movie..."
            onChange={handleSearchInput}
            value={searchInput}
            className="text-black flex-1 bg-transparent outline-none placeholder:text-black text-[20px] font-light pl-6 h-full "
          />
          <button
            onClick={handleSubmit}
            className="mr-[-5px] w-20 h-12 rounded-full flex justify-center items-center bg-sky-500 hover:bg-sky-700 transition text-white text-xl "
          >
            Search
          </button>
        </div>
      </form> */}
      <div>
        
      </div>
    </div>
  );
}


import React, { useEffect } from "react";
//import { movies } from "./movies";
import { useState } from "react";
import { Link } from "react-router-dom";

function MovieList(props) {
  //movie state

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const localmovies = localStorage.getItem("movies");
    if (localmovies.length > 2) {
      setMovies(JSON.parse(localmovies));
    } else {
      console.log("hello");
      fetch(
        "https://www.omdbapi.com/?s=pirates+of+the+caribbean&apikey=c2b92cf8"
      )
        .then((res) => res.json())
        .then((movies) => {
          //set movie state
          setMovies(movies.Search);
        });
    }
  }, []);

  //   useEffect(()=>{
  //         const localmovies = localStorage.getItem("movies");
  //         if( localmovies ){
  //             setMovies(JSON.parse(localmovies));
  //         }

  //         else{
  //             localStorage.setItem("movies",JSON.stringify([]));
  //             fetch(
  //                 "https://www.omdbapi.com/?s=pirates+of+the+caribbean&apikey=c2b92cf8").then((res) => res.json()).then((movies) => {
  //                                //set movie state
  //                                setMovies(movies.Search);
  //                            })

  //         }

  //         }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handClick = () => {
    fetch(`https://www.omdbapi.com/?s=${search}&apikey=c2b92cf8`)
      .then((res) => res.json())
      .then((movies) => {
        setMovies(movies.Search);
      });
  };

  return (
    <>
      <div>
        <div className="top">
          <h1>Knock Knock</h1>
          <div className="search-fav">
            <div>
              <input
                type="text"
                placeholder="Search Movies here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="Button" onClick={handClick}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div>
          {movies && (
            <div className="row">
              {movies.map((movie) => (
                <div className="col-md-3 movie-container">
                  {/* <p className="movieTitle"> {movie.Title} </p>  */}
                  <Link to={`/${movie.imdbID}`}>
                    {" "}
                    <img src={movie.Poster} />{" "}
                  </Link>
                  <div className="open-like">
                    <div>
                      {" "}
                      <Link to={`/${movie.imdbID}`}>
                        {" "}
                        <button>Open</button>{" "}
                      </Link>{" "}
                    </div>
                    {/* <div>
                      {" "}
                      <button>Like</button>{" "}
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MovieList;

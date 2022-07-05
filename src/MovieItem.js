import React, { useState, useEffect } from "react";
import MovieList from "./MoviesList";
//import { movies } from "./movies";
import { useParams } from "react-router-dom";


function MovieItem(){
     //movie state
     const params = useParams();
     let [details, setDetails] = useState();


     useEffect(()=>{
        fetch(
`//www.omdbapi.com/?i=${params.id}&apikey=c2b92cf8`).then((res) => res.json()).then((details) => {
                //set movie state
                setDetails(details);
            });
    })


    return(
        <>
        <div>
            <div className="movie-tab">
                {details && <div className="movie-container">

                <div><img src={details.Poster} /></div>

                <div  className="movie-description icon col-lg-3">
                    <div>Title: {details.Title}</div> 
                    <div>Type: {details.Type}</div>
                    <div>Year: {details.Year}</div>
                </div>

            </div>
            } 

            </div>
        
        </div>
        
    </>
    );

}

export default MovieItem;
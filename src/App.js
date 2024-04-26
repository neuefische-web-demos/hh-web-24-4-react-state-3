import { useState } from "react";
import "./styles.css";
import Movie from "./components/Movie/index.js";
import Form from "./components/Form";
import { uid } from "uid";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovieData);

  function handleAddMovie(newMovie){
    setMovies([...movies, { id: uid(), ...newMovie}]);
  }

  function handleDeleteMovie(id){
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function handleToggleLike(id){
    console.log("toggle like", id);
    setMovies(
      movies.map((movie) => {
        if(movie.id === id){
          return {...movie, isLiked: !movie.isLiked};
        } else {
          return movie;
        }
      })
    );
  }

  return (
    <div className="app">
      <h1>Favorite Movies</h1>
      <ul className="list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie 
              name={movie.name} 
              isLiked={movie.isLiked} 
              id={movie.id} 
              onDeleteMovie={handleDeleteMovie} 
              onToggleLike={handleToggleLike}
              />
          </li>
        ))}
      </ul>
      <Form onAddMovie={handleAddMovie} />
    </div>
  );
}

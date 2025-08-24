import { useEffect, useState } from "react";

const KEY = "207de9b0";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function FetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok) throw new Error("Something went wrong please try again");

          const data = await res.json();
          if (!data.response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
        } catch (error) {
          console.error(error.message);
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      FetchMovies();
    },
    [query]
  );
  return { error, loading, movies };
}

// export function useMovieDetails(KEY) {
//   const [movie, setMovies] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(
//     function () {
//       async function getMovieDetails() {
//         setIsLoading(true);

//         const res = await fetch(
//           `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
//         );
//         const data = await res.json();
//         setMovies(data);
//         setIsLoading(false);
//         console.log(data);
//       }
//       getMovieDetails();
//     },
//     [selectedId]
//   );

//   return { selectedId, setIsLoading, setMovies };
// }

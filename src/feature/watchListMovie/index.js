import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectAllWatchListMovies } from "../addMovie/MovieSlice";
import MovieGrid from "../../components/MovieGrid";

const WatchListMovies = () => {
  const watchListMovies = useSelector(selectAllWatchListMovies);
  // const watchListMovies = useSelector((state)=> state.movies.watchListMovies)
  // bcz i have already create a selector in my slice selectAllWatchListMovies.
  console.log("sddddd", watchListMovies);
  return (
    <>
      <Container fixed>
        <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
          My WatchList
        </Typography>
        {watchListMovies.length > 0 ? (
          <>
            <MovieGrid movies={watchListMovies} type="watchList" />
          </>
        ) : (
          <>
            <h2>Add Movie</h2>
          </>
        )}
      </Container>
    </>
  );
};

export default WatchListMovies;

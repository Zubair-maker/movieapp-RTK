import React from "react";
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { selectAllWathedMovies } from "../addMovie/MovieSlice";
import MovieGrid from "../../components/MovieGrid";

const WachedMovies = () => {
  const watchedMovies = useSelector(selectAllWathedMovies);

  return (
    <>
      <Container fixed>
        <Typography variant="h4" style={{ fontWeight: "600" }} mt={4}>
          Watched Movie
        </Typography>
        {watchedMovies.length > 0 ? (
          <>
            <MovieGrid movies={watchedMovies} type="watched" />
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

export default WachedMovies;

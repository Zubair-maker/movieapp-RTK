import React, { useState, useEffect } from "react";
import LinearBar from "../../components/utils/LinearBar";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMoviesMutation } from "../../services/movieApi";
import MovieDisplay from "../../components/MovieDisplay";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [getMovies, { data: movies, isLoading }] = useGetMoviesMutation();

  useEffect(() => {
    if (query) {
      fetchMovie();
    }
  }, [query]);

  const fetchMovie = async () => {
    await getMovies({ query });
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "570px",
        alignContent: "center",
        marginTop: "50px",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 540,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Movie"
          onChange={handleSearch}
          value={query}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading ? (
        <LinearBar />
      ) : (
        <>
          <div className="results">
            {movies?.results?.length > 0 &&
              movies?.results?.map((movie) => (
                <MovieDisplay key={movie.id} movie={movie} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AddMovie;

import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { CardMedia } from "@mui/material/";
import { Box, Stack } from "@mui/system";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieToWatchList,
  selectAllWatchListMovies,
} from "../feature/addMovie/MovieSlice";

const MovieDisplay = ({ movie }) => {
  const dispatch = useDispatch();

  const watchListMovies = useSelector(selectAllWatchListMovies);

  const disabledmovie = watchListMovies.find((item) => item.id === movie.id);

  return (
    <Card sx={{ display: "flex", height: "170", m: 1 }}>
      {
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      }
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title.substr(0, 25)}
          </Typography>
          <Typography color="text.secondary" component="div">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
            <Button
              variant="contained"
              disabled={disabledmovie ? true : false}
              onClick={() => dispatch(addMovieToWatchList(movie))}
            >
              Add To WatchList
            </Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieDisplay;

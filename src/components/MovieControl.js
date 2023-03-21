import React from "react";
import Stack from "@mui/material/Stack";
import ControlButton from "./utils/ControlButton";
import { useDispatch } from "react-redux";
import {
  addMovieToWatched,
  movieAddToWachList,
  removeMovieFromWatched,
  removeMovieFromWatchList,
} from "../feature/addMovie/MovieSlice";

const MovieControl = ({ type, movie, display }) => {
  const dispatch = useDispatch();
  return (
    <div className={`notdisplayed ${display}`}>
      {type === "watchList" && (
        <Stack direction="row">
          <ControlButton onClick={() => dispatch(addMovieToWatched(movie))}>
            <i className="fa-fw far fa-eye"></i>
          </ControlButton>
          <ControlButton
            onClick={() => dispatch(removeMovieFromWatchList(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}

      {type === "watched" && (
        <Stack direction="row">
          <ControlButton onClick={() => dispatch(movieAddToWachList(movie))}>
            <i className="fa-fw far fa-eye-slash"></i>
          </ControlButton>
          <ControlButton
            onClick={() => dispatch(removeMovieFromWatched(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </ControlButton>
        </Stack>
      )}
    </div>
  );
};

export default MovieControl;

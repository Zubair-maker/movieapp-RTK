import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import {CardMedia} from '@mui/material/'
import { Box, Stack } from "@mui/system";
import Moment from "react-moment";

const MovieDisplay = ({ movie }) => {
//https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
    console.log("ddddddd",movie)
  return (
    <Card sx={{ display: "flex", height: "170", m: 1 }}>
      {<CardMedia
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
            <Button variant="contained">Add To WatchList</Button>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieDisplay;

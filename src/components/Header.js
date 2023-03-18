import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Box, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box sx={{ flexFlow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              style={{ fontWeight: "650", marginLeft: "40px" }}
              sx={{ flexGrow: 1 }}
            >
              <Link to="/" style={{ fontSize: "32px" }}>
                Movie WatchList
              </Link>
            </Typography>
            <Link to="/">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                WatchList
              </Button>
            </Link>
            <Link to="/watched">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                Watched
              </Button>
            </Link>
            <Link to="/add">
              <Button
                color="inherit"
                style={{ fontWeight: "600", fontSize: "20px" }}
              >
                addMovie
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

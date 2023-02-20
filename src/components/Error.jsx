import React from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="home-page">
      <h1 className="home-heading">
        The page you're looking for dosen's exist.
      </h1>
      <Link
        to="/"
        className="home-button"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained" className="home-button" theme={Theme}>
          Go to Home Page
        </Button>
      </Link>
    </div>
  );
}

export default Error;

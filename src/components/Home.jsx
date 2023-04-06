import React from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();

  return (
    <div className="home-page">
      <h4 className="home-heading">
        Welcome! Please select the form you want to fill.
      </h4>

      <Link
        to={`/form-one/${id}`}
        className="home-button"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained" className="home-button" theme={Theme}>
          Form One
        </Button>
      </Link>
      <br />
      <Link
        to={`/form-two/${id}`}
        className="home-button"
        style={{ textDecoration: "none" }}
      >
        <Button variant="contained" className="home-button" theme={Theme}>
          Form Two
        </Button>
      </Link>
    </div>
  );
}

export default Home;

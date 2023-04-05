import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import fireDB from "./firebase";

function Search() {
  const [searchID, setSearchID] = useState("");
  const [data, setData] = useState([]);

  //RETRIEVING DATA FROM SEARCHID DATABASE
  useEffect(() => {
    const fetchData = async () => {
      const response = await fireDB.child("searchID").get();
      if (response.exists()) {
        setData(Object.values(response.val()));
      } else {
        setData([]);
      }
    };
    fetchData();
  }, []);

  function handleChange(event) {
    setSearchID(event.target.value);
  }

  function handleSearch() {
    const { lowerLimit, upperLimit } = data[0];
    if (searchID >= lowerLimit && searchID <= upperLimit) {
      console.log(searchID);
      console.log(lowerLimit);
      console.log(upperLimit);
    } else {
      console.log("Error!");
    }
  }

  return (
    <div className="search-page home-page">
      <h4 className="home-heading">
        Welcome! Please select the form you want to fill.
      </h4>

      <div className="search-div">
        <input
          name="search"
          type="number"
          onChange={handleChange}
          value={searchID}
          min="0"
          placeholder="Enter Search ID."
          autoComplete="off"
        />
      </div>

      <Link to="/" className="home-button" style={{ textDecoration: "none" }}>
        <Button
          onClick={handleSearch}
          variant="contained"
          className="home-button"
          theme={Theme}
        >
          Search
        </Button>
      </Link>
      <hr className="search-line" />
      <Link to="/" className="home-button" style={{ textDecoration: "none" }}>
        <Button variant="contained" className="home-button" theme={Theme}>
          Create New
        </Button>
      </Link>
    </div>
  );
}

export default Search;

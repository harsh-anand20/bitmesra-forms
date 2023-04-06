import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { useNavigate } from "react-router-dom";
import fireDB from "./firebase";
import { formAttributes } from "./Attributes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Search() {
  const [searchID, setSearchID] = useState("");
  const [data, setData] = useState([]);
  const [text, setText] = useState(formAttributes);
  const navigate = useNavigate();

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
      toast.success("Record Found!");
      setTimeout(() => navigate(`/home/${searchID}`), 6000);
    } else {
      console.log("Error!");
      toast.error("No Record Found!");
    }
  }

  // CREATE FUNCTIONALITY

  function handleCreate() {
    const { upperLimit } = data[0];
    const newID = String(Number(upperLimit) + 1);

    setText((prevText) => {
      return {
        ...prevText,
        searchID: newID,
      };
    });

    pushPretermData({ ...text, searchID: newID });
    updateUpperLimit();
  }

  function pushPretermData(updatedText) {
    fireDB.child("pretermDemo").push(updatedText, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Record Created!");
        toast.success("Record Created!");
        setTimeout(() => navigate(`/home/${updatedText.searchID}`), 6000);
      }
    });
  }

  function updateUpperLimit() {
    const { upperLimit } = data[0];
    const updatedUpperLimit = Number(upperLimit) + 1;
    fireDB
      .child(`searchID/-NSG1SPfptsrrUGoZsVi`)
      .update({ upperLimit: updatedUpperLimit }, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Upper limit updated successfully!");
        }
      });
  }
  // CREATE FUNCTIONALITY

  return (
    <div className="search-page home-page">
      <h4 className="home-heading search-heading">
        Search for an existing Record or Create a New Record.
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

      <Button
        onClick={handleSearch}
        variant="contained"
        className="home-button search-button"
        theme={Theme}
      >
        Search
      </Button>

      <hr className="search-line" />

      <Button
        onClick={handleCreate}
        variant="contained"
        className="home-button search-button"
        theme={Theme}
      >
        Create New
      </Button>
      <ToastContainer />
    </div>
  );
}

export default Search;

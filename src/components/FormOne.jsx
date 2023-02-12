import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Theme from "./Theme";

const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

function FormOne() {
  const [text, setText] = useState({
    name: "",
    area: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setText((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    console.log(text);

    setText({
      name: "",
      area: "",
    });

    console.log(text);

    event.preventDefault();
  }

  return (
    <div>
      <form className="sub-form">
        <h4 className="sub-heading">
          Basic details of Patient / मरीज़ का मूल विवरण
        </h4>

        <div className="input-div">
          <label>Name: </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={text.name}
            placeholder="Enter Full Name."
            autoComplete="off"
            required
          />
        </div>

        <div className="input-div">
          <label>Age: </label>
          <input
            name="age"
            type="number"
            min="15"
            max="50"
            // onChange={}
            // value={}
            placeholder="Enter age (15 - 50 Years)."
            autoComplete="off"
            required
          />
        </div>

        <div className="drop-down">
          <label className="drop-down-label">Area:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={options}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <div className="input-div">
          <label>Area: </label>
          <input
            name="area"
            type="text"
            onChange={handleChange}
            value={text.area}
            placeholder="Enter Residence Area."
            autoComplete="off"
            required
          />
        </div>

        <div className="input-div">
          <label>Smoing Habit:</label>
          <div className="radio-div">
            <input
              name="smoking"
              type="radio"
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="smoking"
              type="radio"
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        <div className="input-div">
          <label>Alcohol Intake:</label>
          <div className="radio-div">
            <input
              name="alcohol"
              type="radio"
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="alcohol"
              type="radio"
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        <div className="input-div">
          <label>Weight: </label>
          <input
            name="weight"
            type="number"
            min="30"
            max="300"
            // onChange={}
            // value={}
            placeholder="Enter Weight (in Kgs)."
            autoComplete="off"
            required
          />
        </div>

        <div className="input-div">
          <label>Height: </label>
          <input
            name="height"
            type="number"
            min="30"
            max="400"
            // onChange={}
            // value={}
            placeholder="Enter Height (in cms)."
            autoComplete="off"
            required
          />
        </div>
      </form>

      <Button
        variant="contained"
        className="submit-button"
        theme={Theme}
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
}

export default FormOne;

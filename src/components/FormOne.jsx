import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Theme from "./Theme";
import { formOneAttributes, areaDropDown } from "./Attributes";

function FormOne() {
  const [text, setText] = useState(formOneAttributes);

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

    // setText(formOneAttributes); // Clears Text Fields

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
            onChange={handleChange}
            value={text.age}
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
            options={areaDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  area: value
                };
              });
            }}
          />
        </div>

        <div className="input-div">
          <label>Location: </label>
          <input
            name="location"
            type="text"
            onChange={handleChange}
            value={text.location}
            placeholder="Enter Residence Location."
            autoComplete="off"
            required
          />
        </div>

        <div className="input-div">
          <label>Smoking Habit:</label>
          <div className="radio-div">
            <input
              name="smoking"
              type="radio"
              onChange={handleChange}
              checked={text.smoking === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="smoking"
              type="radio"
              onChange={handleChange}
              checked={text.smoking === "no"}
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
              onChange={handleChange}
              checked={text.alcohol === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="alcohol"
              type="radio"
              onChange={handleChange}
              checked={text.alcohol === "no"}
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
            onChange={handleChange}
            value={text.weight}
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
            onChange={handleChange}
            value={text.height}
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

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Theme from "./Theme";
import {
  formAttributes,
  deliveryTypeDropDown,
  numberOfDeliveryDropDown,
  birthTypeDropDown,
} from "./Attributes";

function FormOne() {
  const [text, setText] = useState(formAttributes);

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

    // setText(formAttributes); // Clears Text Fields

    event.preventDefault();
  }

  return (
    <div className="form-one">
      {/* SUB FORM 1 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Information Regarding Delivery / प्रसव के संबंध में जानकारी
        </h4>

        {/* DELIVERY DATE AND TIME */}
        <div className="input-div">
          <label>Delivery Date and Time:</label>
          <input
            name="deliveryDateTime"
            type="datetime-local"
            onChange={handleChange}
            value={text.deliveryDateTime}
            autoComplete="off"
            required
          />
        </div>

        {/* DELIVERY TYPE */}
        <div className="drop-down">
          <label className="drop-down-label">Delivery Type:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={deliveryTypeDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  deliveryType: value,
                };
              });
            }}
          />
        </div>

        {/* STATUS OF WOMEN */}
        <div className="input-div">
          <label>Status of Women after Delivery:</label>
          <div className="radio-div">
            <input
              name="statusOfWomen"
              type="radio"
              onChange={handleChange}
              checked={text.statusOfWomen === "Alive"}
              value="Alive"
              className="radio-button"
            />
            <label className="radio-label2">Alive</label>
            <input
              name="statusOfWomen"
              type="radio"
              onChange={handleChange}
              checked={text.statusOfWomen === "Not Alive"}
              value="Not Alive"
              className="radio-button"
            />
            <label className="radio-label2">Not Alive</label>
          </div>
        </div>

        {/* NUMBER OF DELIVERY */}
        <div className="drop-down">
          <label className="drop-down-label">Number of Delivery:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={numberOfDeliveryDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  numberOfDelivery: value,
                };
              });
            }}
          />
        </div>

        {/* BIRTH TYPE */}
        <div className="drop-down">
          <label className="drop-down-label">Birth Type:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={birthTypeDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  birthType: value,
                };
              });
            }}
          />
        </div>
      </form>

      {/* SUB FORM 2 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Information Realted to Newborn / नवजात के संबंध में जानकारी
        </h4>

        {/* GENDER */}
        <div className="input-div">
          <label>Gender:</label>
          <div className="radio-div">
            <input
              name="newBornGender"
              type="radio"
              onChange={handleChange}
              checked={text.newBornGender === "Male"}
              value="Male"
              className="radio-button"
            />
            <label className="radio-label2">Male</label>
            <input
              name="newBornGender"
              type="radio"
              onChange={handleChange}
              checked={text.newBornGender === "Female"}
              value="Female"
              className="radio-button"
            />
            <label className="radio-label2">Female</label>
          </div>
        </div>

        {/* WEIGHT OF NEWBORN */}
        <div className="input-div">
          <label>Weight of Newborn: </label>
          <input
            name="newBornWeight"
            type="number"
            min="1"
            max="10"
            onChange={handleChange}
            value={text.newBornWeight}
            placeholder="Enter Weight (in Kgs)."
            autoComplete="off"
            required
          />
        </div>

        {/* LOW BIRTH WEIGHT */}
        <div className="input-div">
          <label>Low Birth Weight:</label>
          <div className="radio-div">
            <input
              name="lowBirthWeight"
              type="radio"
              onChange={handleChange}
              checked={text.lowBirthWeight === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label2">Yes</label>
            <input
              name="lowBirthWeight"
              type="radio"
              onChange={handleChange}
              checked={text.lowBirthWeight === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label2">No</label>
          </div>
        </div>

        {/* STATUS OF NEWBORN */}
        <div className="input-div">
          <label>Status of Newborn:</label>
          <div className="radio-div">
            <input
              name="newBornStatus"
              type="radio"
              onChange={handleChange}
              checked={text.newBornStatus === "Alive"}
              value="Alive"
              className="radio-button"
            />
            <label className="radio-label2">Alive</label>
            <input
              name="newBornStatus"
              type="radio"
              onChange={handleChange}
              checked={text.newBornStatus === "Not Alive"}
              value="Not Alive"
              className="radio-button"
            />
            <label className="radio-label2">Not Alive</label>
          </div>
        </div>
      </form>

      {/* SUB FORM 3 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Vaccine Required to Newborn / नवजात के टीके के बारे में जानकारी
        </h4>

        {/* VITAMIN K1 */}
        <div className="input-div">
          <label>Vitamin K1:</label>
          <div className="radio-div">
            <input
              name="vitaminK1"
              type="radio"
              onChange={handleChange}
              checked={text.vitaminK1 === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="vitaminK1"
              type="radio"
              onChange={handleChange}
              checked={text.vitaminK1 === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* BCG */}
        <div className="input-div">
          <label>BCG:</label>
          <div className="radio-div">
            <input
              name="BCG"
              type="radio"
              onChange={handleChange}
              checked={text.BCG === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="BCG"
              type="radio"
              onChange={handleChange}
              checked={text.BCG === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* OPV */}
        <div className="input-div">
          <label>OPV:</label>
          <div className="radio-div">
            <input
              name="OPV"
              type="radio"
              onChange={handleChange}
              checked={text.OPV === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="OPV"
              type="radio"
              onChange={handleChange}
              checked={text.OPV === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* HEPATITIS */}
        <div className="input-div">
          <label>Hepatitis:</label>
          <div className="radio-div">
            <input
              name="hepatitis"
              type="radio"
              onChange={handleChange}
              checked={text.hepatitis === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="hepatitis"
              type="radio"
              onChange={handleChange}
              checked={text.hepatitis === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>
      </form>

      {/* SUB FORM 4 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Complication After Delivery / प्रसव के बाद जटिलता
        </h4>

        {/* MOTHER */}
        <div className="remarks">
          <label>Mother: </label>
          <textarea
            name="motherComplication"
            onChange={handleChange}
            value={text.motherComplication}
            placeholder="Enter complications if any."
            rows={"3"}
            autoComplete="off"
          />
        </div>

        {/* NEW BORN */}
        <div className="remarks">
          <label>New Born: </label>
          <textarea
            name="newBornComplication"
            onChange={handleChange}
            value={text.newBornComplication}
            placeholder="Enter complications if any."
            rows={"3"}
            autoComplete="off"
          />
        </div>
      </form>

      <Button
        variant="contained"
        className="submit-button"
        theme={Theme}
        onClick={handleClick}
      >
        Submit Form
      </Button>
    </div>
  );
}

export default FormOne;

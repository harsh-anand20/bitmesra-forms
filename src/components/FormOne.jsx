import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Theme from "./Theme";
import {
  formOneAttributes,
  areaDropDown,
  educationDropDown,
  gravidaDropDown,
  parityDropDown,
  heartRateDropDown,
} from "./Attributes";

function FormOne() {
  const [text, setText] = useState(formOneAttributes);

  const [expand, setExpand] = useState(false);

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

  function Print(event) {
    window.print(); // Prints Window
    event.preventDefault();
  }

  return (
    <div className="form-one">
      {/* SUB FORM 1 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Basic details of Patient / मरीज़ का मूल विवरण
        </h4>

        {/* NAME */}
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

        {/* AGE */}
        <div className="input-div">
          <label>Age: </label>
          <input
            name="age"
            type="number"
            min="15"
            max="50"
            onChange={handleChange}
            value={text.age}
            placeholder="Enter Age (15 - 50 Years)."
            autoComplete="off"
            required
          />
        </div>

        {/* AREA */}
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
                  area: value,
                };
              });
            }}
          />
        </div>

        {/* LOCATION */}
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

        {/* EDUCATION */}
        <div className="drop-down">
          <label className="drop-down-label">Education:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={educationDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              // Conditional Rendering
              if (value === "Literate") {
                setExpand(true);
              } else {
                setExpand(false);
              }

              setText((prevText) => {
                return {
                  ...prevText,
                  education: value,
                };
              });
            }}
          />
        </div>

        {/* LEVEL OF EDUCATION (with Conditional Rendering)*/}
        {expand && (
          <div className="input-div">
            <label>Level of Education: </label>
            <input
              name="educationLevel"
              type="text"
              onChange={handleChange}
              value={text.educationLevel}
              placeholder="Enter Education Level."
              autoComplete="off"
            />
          </div>
        )}

        {/* SMOKING HABIT */}
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

        {/* ALCOHOL INTAKE */}
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

        {/* WEIGHT */}
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

        {/* HEIGHT */}
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

      {/* SUB FORM 2 */}
      <form className="sub-form">
        <h4 className="sub-heading">Related Information</h4>

        {/* PREVIOUS CAESAREAN */}
        <div className="input-div">
          <label>Previous Caesarean:</label>
          <div className="radio-div">
            <input
              name="caesarean"
              type="radio"
              onChange={handleChange}
              checked={text.caesarean === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="caesarean"
              type="radio"
              onChange={handleChange}
              checked={text.caesarean === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* PREVIOUS COMPLICATION */}
        <div className="input-div">
          <label>Previous Complication: </label>
          <input
            name="complication"
            type="text"
            onChange={handleChange}
            value={text.complication}
            placeholder="Enter any Previous Complication."
            autoComplete="off"
            required
          />
        </div>

        {/* GRAVIDA */}
        <div className="drop-down">
          <label className="drop-down-label">Gravida:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={gravidaDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  gravida: value,
                };
              });
            }}
          />
        </div>

        {/* PARITY */}
        <div className="drop-down">
          <label className="drop-down-label">Parity:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={parityDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  parity: value,
                };
              });
            }}
          />
        </div>

        {/* LAST MENSURAL DATE */}
        <div className="input-div">
          <label>Last Mensural Date: </label>
          <input
            name="mensuralDate"
            type="date"
            onChange={handleChange}
            value={text.mensuralDate}
            autoComplete="off"
            required
          />
        </div>

        {/* EXPECTED DELIVERY DATE */}
        <div className="input-div">
          <label>Expected Delivery Date: </label>
          <input
            name="expectedDeliveryDate"
            type="date"
            onChange={handleChange}
            value={text.expectedDeliveryDate}
            autoComplete="off"
            required
          />
        </div>

        {/* GESTATIONAL AGE */}
        <div className="input-div">
          <label>Gestational Age: </label>
          <input
            name="gestationalAge"
            type="text"
            onChange={handleChange}
            value={text.gestationalAge}
            placeholder="Enter Gestational Age."
            autoComplete="off"
            required
          />
        </div>

        {/* BLOOD PRESSURE */}
        <div className="input-div">
          <label>Blood Pressure: </label>
          <br />
          <label>Systolic: </label>
          <input
            name="systolicBP"
            type="text"
            onChange={handleChange}
            value={text.systolicBP}
            placeholder="Enter Systolic BP."
            autoComplete="off"
            required
          />
          <br />
          <label>Diastolic: </label>
          <input
            name="diastolicBP"
            type="text"
            onChange={handleChange}
            value={text.diastolicBP}
            placeholder="Enter Diastolic BP."
            autoComplete="off"
            required
          />
        </div>

        {/* HAEMOGLOBIN */}
        <div className="input-div">
          <label>Haemoglobin: </label>
          <input
            name="haemoglobin"
            type="text"
            onChange={handleChange}
            value={text.haemoglobin}
            placeholder="Enter Haemoglobin Level."
            autoComplete="off"
            required
          />
        </div>

        {/* FETAL HEART RATE */}
        <div className="drop-down">
          <label className="drop-down-label">Fetal Heart Rate:</label>
          <Autocomplete
            disablePortal
            className="drop-box-input"
            id="combo-box"
            options={heartRateDropDown}
            sx={{ width: 4 / 5 }}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, value) => {
              setText((prevText) => {
                return {
                  ...prevText,
                  fetalHeartRate: value,
                };
              });
            }}
          />
        </div>

        {/* HIGH COMPPLICATION */}
        <div className="input-div">
          <label>High Complication in Current Pregnancy: </label>
          <input
            name="highComplication"
            type="text"
            onChange={handleChange}
            value={text.highComplication}
            placeholder="Enter High Complications if any."
            autoComplete="off"
          />
        </div>
      </form>

      {/* SUB FORM 3 */}
      <form className="sub-form">
        <h4 className="sub-heading">Tests Required</h4>

        {/* HIV */}
        <div className="input-div">
          <label>HIV:</label>
          <div className="radio-div">
            <input
              name="hiv"
              type="radio"
              onChange={handleChange}
              checked={text.hiv === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="hiv"
              type="radio"
              onChange={handleChange}
              checked={text.hiv === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* SYPHILES */}
        <div className="input-div">
          <label>Syphilis:</label>
          <div className="radio-div">
            <input
              name="syphilis"
              type="radio"
              onChange={handleChange}
              checked={text.syphilis === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="syphilis"
              type="radio"
              onChange={handleChange}
              checked={text.syphilis === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* MALERIA */}
        <div className="input-div">
          <label>Maleria:</label>
          <div className="radio-div">
            <input
              name="maleria"
              type="radio"
              onChange={handleChange}
              checked={text.maleria === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="maleria"
              type="radio"
              onChange={handleChange}
              checked={text.maleria === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* HEPATITIS-B */}
        <div className="input-div">
          <label>HepatitisB:</label>
          <div className="radio-div">
            <input
              name="hepatitisB"
              type="radio"
              onChange={handleChange}
              checked={text.hepatitisB === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="hepatitisB"
              type="radio"
              onChange={handleChange}
              checked={text.hepatitisB === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>
      </form>

      {/* SUB FORM 4 */}
      <form className="sub-form">
        <h4 className="sub-heading">Information Regarding Injections</h4>

        {/* ACTIVE PLACITA */}
        <div className="input-div">
          <label>Active Placita Arrangement:</label>
          <div className="radio-div">
            <input
              name="activePlacita"
              type="radio"
              onChange={handleChange}
              checked={text.activePlacita === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="activePlacita"
              type="radio"
              onChange={handleChange}
              checked={text.activePlacita === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* LABOUR INDUCTION */}
        <div className="input-div">
          <label>Labour Induction:</label>
          <div className="radio-div">
            <input
              name="labourInduction"
              type="radio"
              onChange={handleChange}
              checked={text.labourInduction === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="labourInduction"
              type="radio"
              onChange={handleChange}
              checked={text.labourInduction === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* MEGASULF INJECTION */}
        <div className="input-div">
          <label>Megasulf Injection for Hypertension:</label>
          <div className="radio-div">
            <input
              name="megasulfIinjection"
              type="radio"
              onChange={handleChange}
              checked={text.megasulfIinjection === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="megasulfIinjection"
              type="radio"
              onChange={handleChange}
              checked={text.megasulfIinjection === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* OXYTOCIN INJECTION */}
        <div className="input-div">
          <label>Oxytocin Injection:</label>
          <div className="radio-div">
            <input
              name="oxytocinInjection"
              type="radio"
              onChange={handleChange}
              checked={text.oxytocinInjection === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="oxytocinInjection"
              type="radio"
              onChange={handleChange}
              checked={text.oxytocinInjection === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* ANTIBIOTIC */}
        <div className="input-div">
          <label>Antibiotic:</label>
          <div className="radio-div">
            <input
              name="antibiotic"
              type="radio"
              onChange={handleChange}
              checked={text.antibiotic === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="antibiotic"
              type="radio"
              onChange={handleChange}
              checked={text.antibiotic === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
        </div>

        {/* BLOOD TRANSFUSION */}
        <div className="input-div">
          <label>Blood Transfusion:</label>
          <div className="radio-div">
            <input
              name="bloodTransfusion"
              type="radio"
              onChange={handleChange}
              checked={text.bloodTransfusion === "yes"}
              value="yes"
              className="radio-button"
            />
            <label className="radio-label">Yes</label>
            <input
              name="bloodTransfusion"
              type="radio"
              onChange={handleChange}
              checked={text.bloodTransfusion === "no"}
              value="no"
              className="radio-button"
            />
            <label className="radio-label">No</label>
          </div>
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

      <Button
        variant="contained"
        className="submit-button"
        theme={Theme}
        onClick={Print}
      >
        Print Details
      </Button>
    </div>
  );
}

export default FormOne;

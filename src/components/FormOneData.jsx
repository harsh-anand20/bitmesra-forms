import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { useParams } from "react-router-dom";
import fireDB from "../firebase";

function FormOneData() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fireDB
          .child("pretermDemo")
          .orderByChild("searchID")
          .equalTo(id)
          .once("value");
        const values = Object.values(response.val());
        setData(values[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);


  function Print(event) {
    window.print(); // Prints Window
    console.log(data);
    event.preventDefault();
  }

  return (
    <div className="form-one-data">
      {/* SUB FORM 1 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Basic details of Woman / महिला का मूल विवरण
        </h4>

        {/* NAME */}
        <div className="input-div">
          <label>Name: </label>

          <label>{data.name}</label>
        </div>

        {/* AGE */}
        <div className="input-div">
          <label>Age: </label>
          <label>{data.age}</label>
        </div>

        {/* AREA */}
        <div className="drop-down">
          <label className="drop-down-label">Area:</label>
          <label>{data.area}</label>
        </div>

        {/* LOCATION */}
        <div className="input-div">
          <label>Location: </label>
          <label>{data.location}</label>
        </div>

        {/* EDUCATION */}
        <div className="drop-down">
          <label className="drop-down-label">Education:</label>
          <label>{data.education}</label>
        </div>

        {/* LEVEL OF EDUCATION (with Conditional Rendering)*/}
        <div className="input-div">
          <label>Level of Education: </label>
          <label>{data.educationLevel}</label>
        </div>

        {/* SMOKING HABIT */}
        <div className="input-div">
          <label>Smoking Habit:</label>
          <label>{data.smoking}</label>
        </div>

        {/* ALCOHOL INTAKE */}
        <div className="input-div">
          <label>Alcohol Intake:</label>
          <label>{data.alcohol}</label>
        </div>

        {/* BLOOD GROUP */}
        <div className="drop-down">
          <label className="drop-down-label">Bood Group:</label>
          <label>{data.bloodGroup}</label>
        </div>

        {/* WEIGHT */}
        <div className="input-div">
          <label>Weight: </label>
          <label>{data.weight}</label>
        </div>

        {/* HEIGHT */}
        <div className="input-div">
          <label>Height: </label>
          <label>{data.height}</label>
        </div>
      </form>

      {/* SUB FORM 2 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Pregnancy Related Information / गर्भावस्था संबंधी जानकारी
        </h4>

        {/* PREVIOUS CAESAREAN */}
        <div className="input-div">
          <label>Previous Caesarean:</label>
          <label>{data.caesarean}</label>
        </div>

        {/* PREVIOUS COMPLICATION */}
        <div className="input-div">
          <label>Previous Complication:</label>
          <label>{data.complication}</label>
        </div>

        {/* GRAVIDA */}
        <div className="drop-down">
          <label className="drop-down-label">Gravida:</label>
          <label>{data.gravida}</label>
        </div>

        {/* PARITY */}
        <div className="drop-down">
          <label className="drop-down-label">Parity:</label>
          <label>{data.parity}</label>
        </div>

        {/* LAST MENSURAL DATE */}
        <div className="input-div">
          <label>Last Mensural Date: </label>
          <label>{data.mensuralDate}</label>
        </div>

        {/* EXPECTED DELIVERY DATE */}
        <div className="input-div">
          <label>Expected Delivery Date: </label>
          <label>{data.expectedDeliveryDate}</label>
        </div>

        {/* GESTATIONAL AGE */}
        <div className="input-div">
          <label>Gestational Age: </label>
          <label>{data.gestationalAge}</label>
        </div>

        {/* BLOOD PRESSURE */}
        <div className="input-div">
          <label>Blood Pressure: </label>
          <br />
          <label>Systolic: </label>
          <label>{data.systolicBP}</label>

          <br />
          <label>Diastolic: </label>
          <label>{data.diastolicBP}</label>
        </div>

        {/* HAEMOGLOBIN */}
        <div className="input-div">
          <label>Haemoglobin: </label>
          <label>{data.haemoglobin}</label>
        </div>

        {/* HYPERTENSION */}
        <div className="input-div">
          <label>Hypertension:</label>
          <label>{data.hypertension}</label>
        </div>

        {/* FETAL HEART RATE */}
        <div className="drop-down">
          <label className="drop-down-label">Fetal Heart Rate:</label>
          <label>{data.fetalHeartRate}</label>
        </div>

        {/* HIGH COMPPLICATION */}
        <div className="input-div">
          <label>High Complication in Current Pregnancy:</label>
          <label>{data.highComplication}</label>
        </div>
      </form>

      {/* SUB FORM 3 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Tests Required for Pregnancy / गर्भावस्था के लिए आवश्यक टेस्ट
        </h4>

        {/* HIV */}
        <div className="input-div">
          <label>HIV:</label>
          <label>{data.hiv}</label>
        </div>

        {/* SYPHILES */}
        <div className="input-div">
          <label>Syphilis:</label>
          <label>{data.syphilis}</label>
        </div>

        {/* MALERIA */}
        <div className="input-div">
          <label>Maleria:</label>
          <label>{data.maleria}</label>
        </div>

        {/* HEPATITIS-B */}
        <div className="input-div">
          <label>HepatitisB:</label>
          <label>{data.hepatitisB}</label>
        </div>
      </form>

      {/* SUB FORM 4 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Information Regarding Injections for the Delivery / प्रसव के लिए
          इंजेक्शन के बारे में जानकारी
        </h4>

        {/* ACTIVE PLACITA */}
        <div className="input-div">
          <label>Active Placita Arrangement:</label>
          <label>{data.activePlacita}</label>
        </div>

        {/* LABOUR INDUCTION */}
        <div className="input-div">
          <label>Labor Induction:</label>
          <label>{data.labourInduction}</label>
        </div>

        {/* MEGASULF INJECTION */}
        <div className="input-div">
          <label>Megsulf Injection:</label>
          <label>{data.megasulfIinjection}</label>
        </div>

        {/* OXYTOCIN INJECTION */}
        <div className="input-div">
          <label>Oxytocin Injection:</label>
          <label>{data.oxytocinInjection}</label>
        </div>

        {/* ANTIBIOTIC */}
        <div className="input-div">
          <label>Antibiotic:</label>
          <label>{data.antibiotic}</label>
        </div>

        {/* BLOOD TRANSFUSION */}
        <div className="input-div">
          <label>Blood Transfusion:</label>
          <label>{data.bloodTransfusion}</label>
        </div>
      </form>

      <Button
        variant="contained"
        className="submit-button print-button"
        theme={Theme}
        onClick={Print}
        style={{ position: "relative", left: "6%", marginBottom: "25px" }}
      >
        Print Details
      </Button>
    </div>
  );
}

export default FormOneData;

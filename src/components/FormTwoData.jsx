import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { Link, useParams } from "react-router-dom";
import fireDB from "../firebase";

function FormTwoData() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fireDB
          .child("pretermData")
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
    event.preventDefault();
  }

  return (
    <div className="form-one">
      <form className="sub-form">
        <h4 className="sub-heading">
          Record Information / रिकॉर्ड से संबंधित जानकारी
        </h4>

        <label>Record ID:</label>
        <label className="data-values-label">{data.searchID}</label>
      </form>
      {/* SUB FORM 1 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Information Regarding Delivery / प्रसव के संबंध में जानकारी
        </h4>

        {/* DELIVERY DATE AND TIME */}
        <div className="input-div">
          <label>Delivery Date and Time:</label>
          <label className="data-values-label">{data.deliveryDateTime}</label>
        </div>

        {/* DELIVERY TYPE */}
        <div className="drop-down">
          <label className="drop-down-label">Delivery Type:</label>
          <label className="data-values-label">{data.deliveryType}</label>
        </div>

        {/* STATUS OF WOMEN */}
        <div className="input-div">
          <label>Status of Women after Delivery:</label>
          <label className="data-values-label">{data.statusOfWomen}</label>
        </div>

        {/* NUMBER OF DELIVERY */}
        <div className="drop-down">
          <label className="drop-down-label">Number of Delivery:</label>
          <label className="data-values-label">{data.numberOfDelivery}</label>
        </div>

        {/* BIRTH TYPE */}
        <div className="drop-down">
          <label className="drop-down-label">Birth Type:</label>
          <label className="data-values-label">{data.birthType}</label>
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
          <label className="data-values-label">{data.newBornGender}</label>
        </div>

        {/* WEIGHT OF NEWBORN */}
        <div className="input-div">
          <label>Weight of Newborn: </label>
          <label className="data-values-label">{data.newBornWeight}</label>
        </div>

        {/* LOW BIRTH WEIGHT */}
        <div className="input-div">
          <label>Low Birth Weight:</label>
          <label className="data-values-label">{data.lowBirthWeight}</label>
        </div>

        {/* STATUS OF NEWBORN */}
        <div className="input-div">
          <label>Status of Newborn:</label>
          <label className="data-values-label">{data.newBornStatus}</label>
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
          <label className="data-values-label">{data.vitaminK1}</label>
        </div>

        {/* BCG */}
        <div className="input-div">
          <label>BCG:</label>
          <label className="data-values-label">{data.BCG}</label>
        </div>

        {/* OPV */}
        <div className="input-div">
          <label>OPV:</label>
          <label className="data-values-label">{data.OPV}</label>
        </div>

        {/* HEPATITIS */}
        <div className="input-div">
          <label>Hepatitis:</label>
          <label className="data-values-label">{data.hepatitis}</label>
        </div>
      </form>

      {/* SUB FORM 4 */}
      <form className="sub-form">
        <h4 className="sub-heading">
          Complication After Delivery / प्रसव के बाद जटिलता
        </h4>

        {/* MOTHER */}
        <div className="input-div">
          <label>Mother: </label>
          <label className="data-values-label">{data.motherComplication}</label>
        </div>

        {/* NEW BORN */}
        <div className="input-div">
          <label>New Born: </label>
          <label className="data-values-label">
            {data.newBornComplication}
          </label>
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

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          className="submit-button print-button"
          theme={Theme}
          style={{ position: "relative", left: "8%", marginBottom: "25px", marginLeft: "0"}}
        >
          Home Page
        </Button>
      </Link>
    </div>
  );
}

export default FormTwoData;

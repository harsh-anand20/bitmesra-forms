import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Theme from "./Theme";
import { useParams, useNavigate } from "react-router-dom";
import fireDB from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formOneStatus, setFormOneStatus] = useState(false);
  const [formTwoStatus, setFormTwoStatus] = useState(false);

  useEffect(() => {
    const formsRef = fireDB.child("pretermDemo");
    const query = formsRef.orderByChild("searchID").equalTo(id);
    query.once("value").then((snapshot) => {
      snapshot.forEach((child) => {
        const form = child.val();
        setFormOneStatus(form.formOneStatus);
        setFormTwoStatus(form.formTwoStatus);
      });
    });
  }, [id]);

  function handleFormOneClick() {
    if (formOneStatus) {
      setTimeout(() => navigate(`/form-one-data/${id}`), 6000);
    } else {
      setTimeout(() => navigate(`/form-one/${id}`), 6000);
    }
  }

  function handleFormTwoClick() {
    if (formTwoStatus) {
      setTimeout(() => navigate(`/form-two-data/${id}`), 6000);
    } else {
      setTimeout(() => navigate(`/form-two/${id}`), 6000);
    }
  }

  return (
    <div className="home-page">
      <h4 className="home-heading">
        Welcome! Please select the form you want to fill.
      </h4>

      <Button
        variant="contained"
        className="home-button"
        theme={Theme}
        onClick={handleFormOneClick}
      >
        Form One
      </Button>
      <br />
      <Button
        variant="contained"
        className="home-button"
        theme={Theme}
        onClick={handleFormTwoClick}
      >
        Form Two
      </Button>
    </div>
  );
}

export default Home;
